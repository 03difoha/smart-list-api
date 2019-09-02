const express = require("express");
const router = express.Router();

const dotenv = require("dotenv");
dotenv.config();

const request = require("request");
const crypto = require("crypto");

const SF = require("../scraperFunctions");
const regex = require("../regex");
const toRemove = [...regex.verbs, ...regex.connectives];

function buildList(ingredients) {
  ingredientsObj = {};
  for (let [index, val] of ingredients.entries()) {
    val = removeBrackets(val);

    var [mainItem, altItem] = getAlternatives(val);
    var [mainItem, units, quantity] = getUnits(mainItem);
    id = crypto
      .createHash("md5")
      .update(mainItem)
      .digest("hex");

    if (units.includes("Heaped")) {
      units = units.replace("Heaped", "");
      quantity = quantity * 1.5;
    }

    if (id in ingredientsObj) {
      if (ingredientsObj[id].units != units) {
        ingredientsObj[id].units = {
          unit1: ingredientsObj[id].units,
          unit2: units
        };
        ingredientsObj[id].quantity = {
          quantity1: ingredientsObj[id].quantity,
          quantity2: quantity
        };
      } else {
        ingredientsObj[id].quantity += quantity;
      }
    } else {
      ingredientsObj[id] = {
        item: cleanText(mainItem),
        units: units,
        quantity: quantity,
        alternative: cleanText(altItem)
      };

      // use to write postman tests in console
      // console.log(`\t\t\tpm.test('${cleanText(mainItem)}', function () {
      //                         pm.expect(jsonData['${id}']).to.eql({
      //                            "item": "${cleanText(mainItem)}",
      //                             "units": "${units}",
      //                             "quantity": ${quantity ? quantity : '""'},
      //                             "alternative": "${cleanText(altItem)}"
      //                         })
      //                     });`)
      // console.log(' ')
    }
  }
  return ingredientsObj;
}

function cleanText(text) {
  text = removeVerbs(text);
  text = text.replace(regex.instructions, "");
  text = compactWhitespace(text);
  text = text.trim();
  text = rmvLeadTrailSpace(text);
  return text;
}

const rmvLeadTrailSpace = str => str.replace(/^[ ]+|[ ]+$/g, "");

const compactWhitespace = str => str.replace(/\s{2,}/g, " ");

const removeBrackets = str => str.replace(/ *\([^)]*\) */g, " ");

function removeVerbs(ingredient) {
  for (var r of toRemove) {
    if (r.test(ingredient)) {
      ingredient = ingredient.replace(r, "");
    }
  }
  return ingredient;
}

function getAlternatives(item) {
  // or = item.match(/(?: or |and\/or)/);
  or = new RegExp(/(?: or |and\/or)/).exec(item);
  if (or) {
    prefered = or.input.slice(0, or.index);
    alternative = or.input.slice(or.index);
  } else {
    prefered = item;
    alternative = "";
  }
  return [prefered, alternative];
}

function parseQuantity(f) {
  if (parseFloat(f)) {
    return parseFloat(f);
  } else {
    return regex.unicodeFractions[f].amount;
  }
}

function getUnits(i) {
  quantity = "";
  units = "";
  i = compactWhitespace(i);
  for (var a of regex.units) {
    test = new RegExp(a.rgx).exec(i);
    if (test != null) {
      i = i.replace(test[0], "");
      quantity = parseQuantity(test[1]);
      units = a.label;
    }
  }

  return [i, units, quantity];
}

function convertUnits(amount, a, b) {
  return new Promise(function (resolve, reject) {
    url = `https://api.unitconvert.io/api/v1/Measurements/Convert?from=${amount}%20${a}&to=1%20${b}`;
    var options = {
      host: "url",
      url: url,
      method: "GET",
      headers: {
        "api-key": process.env.UNIT_CONVERSION_API_KEY
      }
    };
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      }
      resolve(response);
    });
  });
}

function getIngredients(url) {
  return new Promise(function (resolve, reject) {
    if (!regex.validURL.test(url)) {
      return reject(new Error("URL entered is invalid"));
    }
    host = url.match(regex.host)[0];
    if (!SF.keys[host]) {
      return reject(
        new Error(
          "We do not currently support recipes, from this site. if you wish to submit a requst to do so please click this link"
        )
      );
    } else {
      request(url, function (error, response, body) {
        scraped = SF.scrape(host, body);

        if (!scraped) {
          return reject(
            new Error(
              "Couldn't find any ingredients on the page provided...try another"
            )
          );
        }
        ingredients = buildList(ingredients);
        resolve(ingredients);
      });
    }
  });
}

router.post("/", function (req, res, next) {
  getIngredients(req.body.url)
    .then(function (result) {
      // `delay` returns a promise
      res.send(result);
    })
    .catch(function (err) {
      next(err);
    });
});

module.exports = router;