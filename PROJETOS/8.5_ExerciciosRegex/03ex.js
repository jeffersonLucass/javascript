const regex = /\w+:  Nike|Adidas|Puma|Asics/;

console.log(regex.test("Marca:  Puma"));
console.log(regex.test("Marca:  Adidas"));
console.log(regex.test("Marca:  Asics"));
console.log(regex.test("Marca:  Nike"));
