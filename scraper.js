const rp = require('request-promise');
const cheerio = require('cheerio');

exports.scrape = async (word) => {
  const test = [];
  const options = {
  uri: `https://www.dicio.com.br/${word}`,
  encoding: 'latin1',
  transform: function (body) {
  return cheerio.load(body);
      }
    };
    try {
    let result = [];
    let $ = await rp(options);
    $('.frases .frase').each(function (i, elem) {
      result.push(new Promise((resolve,reject) => {
        resolve($(this).html());
      }));
    });
    return Promise.all(result).then((result) => {
      return result;
  });
} catch (error) {
  console.log("Error detected:" + error.message);
}

};
