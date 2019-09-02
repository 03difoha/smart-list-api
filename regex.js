verbs = [
    /\bchop\b/,
    /\bchopped\b/,
    /\bcooked\b/,
    /\bcrumbled?\b/,
    /\bcubed\b/,
    /\bcut\b/,
    /\bdecorate?\b/,
    /\bdiced?\b/,
    /\bgarnish\b/,
    /\bgrated\b/,
    /\bhalved\b/,
    /\bpeeled\b/,
    /\bmashed\b/,
    /(?<!beef |turkey |pork )\bminced?\b(?! beef| turkey| pork)/,
    /\brinsed?\b/,
    /\bseeded\b/,
    /\bserve\b/,
    /\bserving\b/,
    /\bsoaked\b/,
    /\bscrubbed\b/,
    /\bsliced\b/,
    /\bsteamed\b/,
    /\bserving\b/,
    /\bserved\b/,
    /\uncooked\b/,
    /\bwashed\b/,

    /\baerate\b/,
    /\b\bage\b/,
    /\bbake\b/,
    /\bbaste\b/,
    /\bbatter\b/,
    /\bbeat\b/,
    /\bbind\b/,
    /\bblacken\b/,
    /\bblanch\b/,
    /\bblend\b/,
    /\bboil\b/,
    /\bbone\b/,
    /\bbraise\b/,
    /\bbread\b/,
    /\bbrew\b/,
    /\bbroil\b/,
    /\bbrown\b/,
    /\bbrush\b/,
    /\bburn\b/,
    /\bbutterfly\b/,
    /\bchar\b/,
    /\bchill\b/,
    /\bchunk\b/,
    /\bchurn\b/,
    /\bclarify\b/,
    /\bcoddle\b/,
    /\bcombine\b/,
    /\bcongeal\b/,
    /\bcool\b/,
    /\bcore\b/,
    /\bcured\b/,
    /\bcut\b/,
    /\bdebone \b/,
    /\bdecorate\b/,
    /\bdeep fry\b/,
    /\bdeglaze\b/,
    /\bdescale\b/,
    /\bdevil\b/,
    /\bdice\b/,
    /\bdip\b/,
    /\bdough\b/,
    /\bdrain\b/,
    /\bdrizzle\b/,
    /\bdry\b/,
    /\bferment\b/,
    /\bfillet\b/,
    /\bfilter\b/,
    /\bflambe\b/,
    /\bflavor\b/,
    /\bflip\b/,
    /\bfold\b/,
    /\bfreeze\b/,
    /\bfrost\b/,
    /\bfroth\b/,
    /\bfry\b/,
    /\bgarnish\b/,
    /\bgel\b/,
    /\bglaze \b/,
    /\bgrate\b/,
    /\bgratin\b/,
    /\bgrease\b/,
    /\bgrill\b/,
    /\bgrind\b/,
    /\bhard boil\b/,
    /\bharden\b/,
    /\bhash\b/,
    /\bheat\b/,
    /\bhull\b/,
    /\binfuse\b/,
    /\bjulienne\b/,
    /\bknead\b/,
    /\blayer\b/,
    /\bleaven\b/,
    /\bmacerate\b/,
    /\bmarinate\b/,
    /\bmash\b/,
    /\bmeasure\b/,
    /\bmelt\b/,
    /\bmicrowa\b/,
    // /\bmix\b/,
    /\bmold\b/,
    /\boven fr\b/,
    /\bovercoo\b/,
    /\bpan fry\b/,
    /\bparboil\b/,
    /\bpare\b/,
    /\bpeel\b/,
    /\bpercola\b/,
    /\bpickle\b/,
    /\bpit\b/,
    /\bpoach\b/,
    /\bpop\b/,
    /\bpour\b/,
    /\bprecook\b/,
    /\bprepare\b/,
    /\bpreserv\b/,
    /\bpress\b/,
    /\bprocess\b/,
    /\bpulp\b/,
    /\bpuree\b/,
    /\bquarter\b/,
    /\breduce \b/,
    /\brefrige\b/,
    /\brender\b/,
    /\brise\b/,
    /\broast\b/,
    /\broll\b/,
    /\brub\b/,
    /\bsaute\b/,
    /\bscald\b/,
    /\bscallop\b/,
    /\bscoop\b/,
    /\bscore\b/,
    /\bscrambl\b/,
    /\bsear\b/,
    /\bseason\b/,
    /\bseparat\b/,
    /\bserve\b/,
    /\bshell\b/,
    /\bshred\b/,
    /\bshuck\b/,
    /\bsieve\b/,
    /\bsift\b/,
    /\bsimmer\b/,
    /\bskewer\b/,
    /\bskim\b/,
    /\bskin\b/,
    /\bslice\b/,
    /\bsliver\b/,
    /\bsmoke\b/,
    /\bsnip\b/,
    /\bsoak\b/,
    /\bsoft boil\b/,
    /\bsouse\b/,
    /\bsprinkle\b/,
    /\bsprinkling\b/,
    /\bsteam\b/,
    /\bsteep\b/,
    /\bstew\b/,
    /\bstir\b/,
    /\bstir fr\b/,
    /\bstrain\b/,
    /\bstuff\b/,
    /\bsweat\b/,
    /\bsweeten\b/,
    /\btemper\b/,
    /\btenderise\b/,
    /\bthicken\b/,
    /\bthin\b/,
    /\btoast\b/,
    /\btop\b/,
    /\btoss\b/,
    /\btrim\b/,
    /\btruss\b/,
    /\bturn\b/,
    /\buncured\b/,
    /\bunmold\b/,
    /\bwarm\b/,
    /\bwash\b/,
    /\bwedge\b/,
    /\bwhip\b/,
    /\bwhisk\b/,
    /\bzap\b/,
]

const connectives = [
    /into/,
    //   /or\b/,
    /the/,
    /roughly/,
    /optional/,
    /finely/,
    /from/,
    /\band\b(?!\/or)/,
    /sustainable/,
    /sources/,
    /\bon\b/,
    /thinly/,
    /about/,
    /freshly/,
    /\bto\b(?! taste)/,
    /,/,
    /, /,
    /cheap/,
    /for/
];

instructions = /((?:small|medium|large|big|fine|finely) (?:slices|chunks|cubes))/g;

host = /(?!w{1,}\.)(\w+\.?)([a-zA-Z]+)(?=\.\w+)/g;

validURL = /^(ftp|http|https):\/\/[^ "]+$/;

unicodeFractions = {
    '½': {
        amount: 0.5
    },
    '⅓': {
        amount: 0.33
    },
    '⅔': {
        amount: 0.66
    },
    '¼': {
        amount: 0.25
    },
    '¾': {
        amount: 0.75
    },
    '⅕': {
        amount: 0.2
    },
    '⅖': {
        amount: 0.4
    },
    '⅗': {
        amount: 0.6
    },
    '⅘': {
        amount: 0.8
    },
}

units = [{
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:g|grams?)\b/gm,
        label: 'Grams',
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:kg|kilograms?)\b/gm,
        label: 'Kilograms'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:tsp|teaspoons?)\b/gm,
        label: 'Teaspoons'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:heaped tsp|heaped teaspoons?)\b/gm,
        label: 'Heaped Teaspoons'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:tbsp|tablespoons?)\b/gm,
        label: 'Tablespoons'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:heaped tbsp|heaped tablespoons?)\b/gm,
        label: 'Heaped Tablespoon'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:ml|millilitres?)\b/gm,
        label: 'Millilitres'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:l|litres?)\b/gm,
        label: 'Litres',
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:cm|centimetres?)\b/gm,
        label: 'Centimetres'
    },
    {
        rgx: /(\d*\.*-*\/*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:cups?)\b/gm,
        label: 'Cups'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:oz|ounces?)\b/gm,
        label: 'Ounces'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:punnets?)\b/gm,
        label: 'Punnets'
    },
    {
        rgx: /(\d*\.*-*\d+?|½|⅓|⅔|¼|¾|⅕|⅖|⅗|⅗) ?(?:packs?)\b/gm,
        label: 'Packs'
    },
    {
        rgx: /(\d* ?½|\d* ?⅓|\d* ?⅔|\d* ?¼|\d* ?¾|\d* ?⅕|\d* ?⅖|\d* ?⅗|\d* ?⅗|\d\.*-*\d*\.? ?x*)(?!.*\bg\b|.*kg|.*tsp|.*tbsp|.*ml|.*\bl\b|.*grams?|.*kilograms?|.*teaspoons?|.*tablespoons?|.*millilitres?|.*litres?|\d*%)/gm,
        label: ''
    }
]



module.exports = {
    verbs,
    connectives,
    instructions,
    host,
    validURL,
    unicodeFractions,
    units
};