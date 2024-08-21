const regex = /^(?=.{3,16}$)[a-z0-9-_]/;
//explicação: ^ = comecar como uma expressão regular de 3 a 16 caracteres

console.log(regex.test("matheus_123"));
console.log(regex.test("as"));
console.log(regex.test("1111111111111111111111111111111"));



