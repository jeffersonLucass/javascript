const padrao = /Abacax?i/;

console.log(padrao.test("Abacai"));
console.log(padrao.test("Abacaxi"));

const padrao2 = /\d+\w?/;
// o operador question significa que o caractere pode ou não ser repetido.
console.log(padrao2.test("123"));
console.log(padrao2.test("123asd"));