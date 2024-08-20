const validarDominio = /[?www.]\w+\.com|.com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.google.com.br"));
console.log(validarDominio.test("www.google.ciuu"));
console.log(validarDominio.test("google.com.br"));
