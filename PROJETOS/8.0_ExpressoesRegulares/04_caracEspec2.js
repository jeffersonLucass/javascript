const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavrasTresLetras = /\w\w\w/
//\w significa qualquer caractere alfanúmerico.

console.log(palavrasTresLetras.test("asd"));
console.log(palavrasTresLetras.test("123"));
console.log(palavrasTresLetras.test("123sad"));

