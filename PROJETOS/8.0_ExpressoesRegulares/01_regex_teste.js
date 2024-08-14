const reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?"))
console.log(reg1.test("Não tem"))

const reg2 = /bola/;
let text = "tem bola na cesta";
console.log(reg2.test("Tem bola?"))
console.log(reg2.test("Não tem"))
console.log(reg2.test(text))

console.log(/quadrado/.test("eu gosto do quadrado"));
console.log(/quadrado/.test("123r23424164914619461quadrado1218416491461"));
