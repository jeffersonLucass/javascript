const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2024]{4}/;

console.log(validarDataNasc.test("00/00/0000"));
console.log(validarDataNasc.test("08/06/2005"));
console.log(validarDataNasc.test("1/06/2005"));
console.log(validarDataNasc.test("99/99/9999"));

