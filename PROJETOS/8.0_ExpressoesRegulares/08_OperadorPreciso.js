const cep = /\d{5}-\d{3}/;

console.log(cep.test("11111-111"));
console.log(cep.test("881-50"));
console.log(cep.test("asd"));


const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(11)1234-6789"));
console.log(tel.test("(11)91234-6789"));

