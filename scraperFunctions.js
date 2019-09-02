const cheerio = require("cheerio");

const keys = {
    bbcgoodfood: ".ingredients-list__item",
    jamieoliver: ".ingred-list > li",
    foodnetwork: ".o-Ingredients__a-Ingredient",
    cookieandkate: ".tasty-recipe-ingredients > ul > li"
};

function scrape(host, body) {
    ingredients = [];
    var $ = cheerio.load(body);

    $(keys[host]).each(function (i, e) {
        if (host == "bbcgoodfood") {
            ingredients[i] = $(this).attr().content;
        } else {
            ingredients[i] = $(this).text();
        }
    });

    if (ingredients.length == 0) {
        return false
    }

    return ingredients;
}

module.exports = {
    keys,
    scrape
};