const notAB = /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("Aqui tem a"));

const notAZ = /[^a-z]/;
// o not é mais restrito,ou seja, tem que ser colocado oque esta exatamente entre co    lchetes
console.log(notAZ.test("aadadadauhduuqdoqq"));