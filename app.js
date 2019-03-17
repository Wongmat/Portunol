const express = require('express');
const search = require('./search.js');
const scraper = require('./scraper.js');
const conjugacion = require('./conjugacion.js');
const proxy = require('./Proxy.js');
const main = express();

proxy.start();
main.set('view engine', 'ejs');
main.set('views', __dirname + '/views');
main.use(express.static(__dirname));

main.get('/', (req, res) => {
  res.render('index');
});

main.get('/traducir', async (req, res) => {
  let result = "";
  let searchTerm = req.query.q;
  searchTerm = searchTerm.toLowerCase();
  try {
  result = await search.ajax(searchTerm);
} catch (err) {
  console.log(err);
  res.render('error', {errmessage: err.message});
  return;
}

  let hits = result[0].hits;
  let translation = "";
  let targetHTML = "";
  jsonIterate(hits);

  function jsonIterate(hits) {
  for (var x = 0; x < hits.length; x++) {
    let roms = hits[x].roms;
  for(var i = 0; i < roms.length; i++) { //Find best matching definition
    let translationsArray = roms[i].arabs[0].translations;
    for (var j = 0; j < translationsArray.length; j++) {
      let sourceMatch = translationsArray[j].source.match(/(?<=>)[^<]+\w+[^>]+(?=<)/g);
      if ((sourceMatch.length == 1 || sourceMatch[1] == '(-a)' || sourceMatch[1] == '(-o)') && sourceMatch[0] == searchTerm) {
        targetHTML = translationsArray[j].target;
        translation = targetHTML.match(/^[^<]*/).toString();
        return;
      }

    }
  }
}

}

  let scrapeResult = await scraper.scrape(translation);
  if (result[0].hits[0].roms[0].headword_full.includes("verb") || result[0].hits[0].roms[0].arabs[0].header.includes("verb")) {
    let conjugados = conjugacion.conjugar(translation);
    res.render('verbo', {searchTerm: searchTerm, translation: translation, scrapeResult: scrapeResult, conjugacion: conjugados});
  }

  else if (result[0].hits[0].roms[0].headword_full.includes("noun") || result[0].hits[0].roms[0].arabs[0].header.includes("noun")) {
  console.log("Got here: " + targetHTML);
  let genero = targetHTML.match(/(?<=acronym title=")feminine|masculine/);
  genero = genero[0].replace(/e$/, "o");
  res.render('noun', {searchTerm: searchTerm, translation: translation, scrapeResult: scrapeResult, genero: genero});
}

else {
  console.log(translation);
res.render('general', {searchTerm: searchTerm, translation: translation, scrapeResult: scrapeResult});
}

});


main.listen(process.env.PORT || 443, () => {
console.log("Server running")});//process.env.PORT || 80);
