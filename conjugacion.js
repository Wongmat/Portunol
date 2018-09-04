
exports.conjugar = (infinitivo) => {
const tableHTML = [];
if (infinitivo.slice(-2) == "ar") {

tableHTML[0] = '<td>' + infinitivo.replace(/ar$/, "o") + '</td>';

if (infinitivo.slice(-3) == "car") {
tableHTML[0] += '<td>' + infinitivo.replace(/car$/, "quei") + '</td>';
tableHTML[6] = '<td>' + infinitivo.replace(/car$/, "que") + '</td>';
tableHTML[7] = '<td>' + infinitivo.replace(/car$/, "ques") + '</td>';
tableHTML[8] = '<td>' + infinitivo.replace(/car$/, "que") + '</td>';
tableHTML[9] = '<td>' + infinitivo.replace(/car$/, "quemos") + '</td>';
tableHTML[10] = '<td>' + infinitivo.replace(/car$/, "queis") + '</td>';
tableHTML[11] = '<td>' + infinitivo.replace(/car$/, "quem") + '</td>';
}

else  {
tableHTML[0] += '<td>' + infinitivo.replace(/ar$/, "ei") + '</td>';
tableHTML[6] = '<td>' + infinitivo.replace(/ar$/, "e") + '</td>';
tableHTML[7] = '<td>' + infinitivo.replace(/ar$/, "es") + '</td>';
tableHTML[8] = '<td>' + infinitivo.replace(/ar$/, "e") + '</td>';
tableHTML[9] = '<td>' + infinitivo.replace(/ar$/, "emos") + '</td>';
tableHTML[10] = '<td>' + infinitivo.replace(/ar$/, "eis") + '</td>';
tableHTML[11] = '<td>' + infinitivo.replace(/ar$/, "em") + '</td>';
}

tableHTML[0] += '<td>' + infinitivo.replace(/ar$/, "ava") + '</td><td>' + infinitivo + "ia" + '</td><td>' + infinitivo + "ei" + '</td>';
tableHTML[1] = '<td>' + infinitivo.replace(/ar$/, "as") + '</td><td>' + infinitivo.replace(/ar$/, "aste") + '</td><td>' + infinitivo.replace(/ar$/, "avas") + '</td><td>' + infinitivo + "ias" + '</td><td>' + infinitivo + "ás" + '</td></tr>';
tableHTML[2] = '<td>' + infinitivo.replace(/ar$/, "a") + '</td><td>' + infinitivo.replace(/ar$/, "ou") + '</td><td>' + infinitivo.replace(/ar$/, "ava") + '</td><td>' + infinitivo + "ia" + '</td><td>' + infinitivo + "á" + '</td></tr>';
tableHTML[3] = '<td>' + infinitivo.replace(/ar$/, "amos") + '</td><td>' + infinitivo.replace(/ar$/, "amos") + '</td><td>' + infinitivo.replace(/ar$/, "ávamos") + '</td><td>' + infinitivo + "íamos" + '</td><td>' + infinitivo + "emos" + '</td></tr>';
tableHTML[4] = '<td>' + infinitivo.replace(/ar$/, "ais") + '</td><td>' + infinitivo.replace(/ar$/, "astes") + '</td><td>' + infinitivo.replace(/ar$/, "áveis") + '</td><td>' + infinitivo + "íeis" + '</td><td>' + infinitivo + "eis" + '</td></tr>';
tableHTML[5] = '<td>' + infinitivo.replace(/ar$/, "am") + '</td><td>' + infinitivo + "am" + '</td><td>' + infinitivo.replace(/ar$/, "avam") + '</td><td>' + infinitivo + "iam" + '</td><td>' + infinitivo + "ão" + '</td></tr>';

tableHTML[6] += '<td>' + infinitivo.replace(/r$/, "sse") + '</td>' + '<td>' + infinitivo + '</td>';
tableHTML[7] += '<td>' + infinitivo.replace(/r$/, "sses") + '</td>' + '<td>' + infinitivo + 'es</td>';
tableHTML[8] += '<td>' + infinitivo.replace(/r$/, "sse") + '</td>' + '<td>' + infinitivo + '</td>';
tableHTML[9] += '<td>' + infinitivo.replace(/ar$/, "ássemos") + '</td>' + '<td>' + infinitivo + 'mos</td>';
tableHTML[10] += '<td>' + infinitivo.replace(/ar$/, "ásseis") + '</td>' + '<td>' + infinitivo + 'des</td>';
tableHTML[11] += '<td>' + infinitivo.replace(/r$/, "ssem") + '</td>' + '<td>' + infinitivo + 'em</td>';
}

else if (infinitivo.slice(-2) == "er") {

if (infinitivo.slice(-3) == "cer") {
tableHTML[0] = '<td>' + infinitivo.replace(/cer$/, "ço") + '</td>';
tableHTML[6] = '<td>' + infinitivo.replace(/cer$/, "ça") + '</td>';
tableHTML[7] = '<td>' + infinitivo.replace(/cer$/, "ças") + '</td>';
tableHTML[8] = '<td>' + infinitivo.replace(/cer$/, "ça") + '</td>';
tableHTML[9] = '<td>' + infinitivo.replace(/cer$/, "çamos") + '</td>';
tableHTML[10] = '<td>' + infinitivo.replace(/cer$/, "çais") + '</td>';
tableHTML[11] = '<td>' + infinitivo.replace(/cer$/, "çam") + '</td>';
}

else {

tableHTML[0] = '<td>' + infinitivo.replace(/er$/, "o") + '</td>';
tableHTML[6] = '<td>' + infinitivo.replace(/er$/, "a") + '</td>';
tableHTML[7] = '<td>' + infinitivo.replace(/er$/, "as") + '</td>';
tableHTML[8] = '<td>' + infinitivo.replace(/er$/, "a") + '</td>';
tableHTML[9] = '<td>' + infinitivo.replace(/er$/, "amos") + '</td>';
tableHTML[10] = '<td>' + infinitivo.replace(/er$/, "ais") + '</td>';
tableHTML[11] = '<td>' + infinitivo.replace(/er$/, "am") + '</td>';
}

tableHTML[0] += '<td>' + infinitivo.replace(/er$/, "i") + '</td>' + '<td>' + infinitivo.replace(/er$/, "ia") + '</td><td>' + infinitivo + "ia" + '</td><td>' + infinitivo + "ei" + '</td>';
tableHTML[1] = '<td>' + infinitivo.replace(/er$/, "es") + '</td><td>' + infinitivo.replace(/er$/, "este") + '</td><td>' + infinitivo.replace(/er$/, "ias") + '</td><td>' + infinitivo + "ias" + '</td><td>' + infinitivo + "ás" + '</td></tr>';
tableHTML[2] = '<td>' + infinitivo.replace(/er$/, "e") + '</td><td>' + infinitivo.replace(/er$/, "eu") + '</td><td>' + infinitivo.replace(/er$/, "ia") + '</td><td>' + infinitivo + "ia" + '</td><td>' + infinitivo + "á" + '</td></tr>';
tableHTML[3] = '<td>' + infinitivo.replace(/er$/, "emos") + '</td><td>' + infinitivo.replace(/er$/, "emos") + '</td><td>' + infinitivo.replace(/er$/, "íamos") + '</td><td>' + infinitivo + "íamos" + '</td><td>' + infinitivo + "emos" + '</td></tr>';
tableHTML[4] = '<td>' + infinitivo.replace(/er$/, "eis") + '</td><td>' + infinitivo.replace(/er$/, "estes") + '</td><td>' + infinitivo.replace(/er$/, "íeis") + '</td><td>' + infinitivo + "íeis" + '</td><td>' + infinitivo + "eis" + '</td></tr>';
tableHTML[5] = '<td>' + infinitivo.replace(/er$/, "em") + '</td><td>' + infinitivo + "am" + '</td><td>' + infinitivo.replace(/er$/, "iam") + '</td><td>' + infinitivo + "iam" + '</td><td>' + infinitivo + "ão" + '</td></tr>';

tableHTML[6] += '<td>' + infinitivo.replace(/r$/, "esse") + '</td>' +  '<td>' + infinitivo + '</td>';
tableHTML[7] += '<td>' + infinitivo.replace(/r$/, "esses") + '</td>' +  '<td>' + infinitivo + 'es</td>';
tableHTML[8] += '<td>' + infinitivo.replace(/r$/, "esse") + '</td>' +  '<td>' + infinitivo + '</td>';
tableHTML[9] += '<td>' + infinitivo.replace(/r$/, "êssemos") + '</td>' +  '<td>' + infinitivo + 'mos</td>';
tableHTML[10] += '<td>' + infinitivo.replace(/r$/, "êsseis") + '</td>' +  '<td>' + infinitivo + 'des</td>';
tableHTML[11] += '<td>' + infinitivo.replace(/r$/, "essem") + '</td>' +  '<td>' + infinitivo + 'em</td>';

}

else if (infinitivo.slice(-2) == "ir") {
var temp = infinitivo;

if(/e(\w{1,2})ir\b/.test(infinitivo.slice(-5))) {

infinitivo = infinitivo.replace(/(^\w*)e(\w{1,2})(ir)\b/, "$1i$2$3");

tableHTML[6] = '<td>' + infinitivo.replace(/ir$/, "a") + '</td>';
tableHTML[7] = '<td>' + infinitivo.replace(/ir$/, "as") + '</td>';
tableHTML[8] = '<td>' + infinitivo.replace(/ir$/, "a") + '</td>';
tableHTML[9] = '<td>' + infinitivo.replace(/ir$/, "amos") + '</td>';
tableHTML[10] = '<td>' + infinitivo.replace(/ir$/, "ais") + '</td>';
tableHTML[11] = '<td>' + infinitivo.replace(/ir$/, "am") + '</td>';

if (temp.slice(-5) == "gredir") {

tableHTML[1] = '<td>' + infinitivo.replace(/ir$/, "es") + '</td>';
tableHTML[2] = '<td>' + infinitivo.replace(/ir$/, "e") + '</td>';
tableHTML[5] = '<td>' + infinitivo.replace(/ir$/, "em") + '</td>';
infinitivo = temp;
}

else {
  tableHTML[1] = '<td>' + temp.replace(/ir$/, "es") + '</td>';
  tableHTML[2] = '<td>' + temp.replace(/ir$/, "e") + '</td>';
  tableHTML[5] = '<td>' + temp.replace(/ir$/, "em") + '</td>';

  }

  tableHTML[3] = '<td>' + infinitivo.replace(/ir$/, "imos") + '</td>';
  tableHTML[4] = '<td>' + infinitivo.replace(/ir$/, "is") + '</td>';
}

else {
tableHTML[6] = '<td>' + infinitivo.replace(/ir$/, "a") + '</td>';
tableHTML[7] = '<td>' + infinitivo.replace(/ir$/, "as") + '</td>';
tableHTML[8] = '<td>' + infinitivo.replace(/ir$/, "a") + '</td>';
tableHTML[9] = '<td>' + infinitivo.replace(/ir$/, "amos") + '</td>';
tableHTML[10] = '<td>' + infinitivo.replace(/ir$/, "ais") + '</td>';
tableHTML[11] = '<td>' + infinitivo.replace(/ir$/, "am") + '</td>';
}


if (infinitivo.slice(-3) == "gir") {
tableHTML[0] = '<td>' + infinitivo.replace(/gir$/, "jo") + '</td>'; }

tableHTML[0] = '<td>' + infinitivo.replace(/ir$/, "o") + '</td>';


infinitivo = temp;
tableHTML[0] += '<td>' + infinitivo.replace(/ir$/, "i") + '</td>' + '<td>' + infinitivo.replace(/ir$/, "ia") + '</td><td>' + infinitivo + "ia" + '</td><td>' + infinitivo + "ei" + '</td>';
tableHTML[1] = '<td>' + infinitivo.replace(/ir$/, "es") + '</td><td>' + infinitivo.replace(/ir$/, "iste") + '</td><td>' + infinitivo.replace(/ir$/, "ias") + '</td><td>' + infinitivo + "ias" + '</td><td>' + infinitivo + "ás" + '</td>';
tableHTML[2] = '<td>' + infinitivo.replace(/ir$/, "e") + '</td><td>' + infinitivo.replace(/ir$/, "iu") + '</td><td>' + infinitivo.replace(/ir$/, "ia") + '</td><td>' + infinitivo + "ia" + '</td><td>' + infinitivo + "á" + '</td>';
tableHTML[3] = '<td>' + infinitivo.replace(/ir$/, "imos") + '</td><td>' + infinitivo.replace(/ir$/, "imos") + '</td><td>' + infinitivo.replace(/ir$/, "íamos") + '</td><td>' + infinitivo + "íamos" + '</td><td>' + infinitivo + "emos" + '</td>';
tableHTML[4] = '<td>' + infinitivo.replace(/ir$/, "is") + '</td><td>' + infinitivo.replace(/ir$/, "istes") + '</td><td>' + infinitivo.replace(/ir$/, "íeis") + '</td><td>' + infinitivo + "íeis" + '</td><td>' + infinitivo + "eis" + '</td>';
tableHTML[5] = '<td>' + infinitivo.replace(/ir$/, "em") + '</td><td>' + infinitivo + "am" + '</td><td>' + infinitivo.replace(/ir$/, "iam") + '</td><td>' + infinitivo + "iam" + '</td><td>' + infinitivo + "ão" + '</td>';

tableHTML[6] += '<td>' + infinitivo.replace(/r$/, "sse") + '</td>' +  '<td>' + infinitivo + '</td>';
tableHTML[7] += '<td>' + infinitivo.replace(/r$/, "sses") + '</td>' +  '<td>' + infinitivo + 'es</td>';
tableHTML[8] += '<td>' + infinitivo.replace(/r$/, "sse") + '</td>' +  '<td>' + infinitivo + '</td>';
tableHTML[9] += '<td>' + infinitivo.replace(/ir$/, "íssemos") + '</td>' + '<td>' + infinitivo + 'mos</td>';
tableHTML[10] += '<td>' + infinitivo.replace(/ir$/, "ísseis") + '</td>' +  '<td>' + infinitivo + 'des</td>';
tableHTML[11] += '<td>' + infinitivo.replace(/r$/, "ssem") + '</td>' +  '<td>' + infinitivo + 'em</td>';

}
return tableHTML;
};
