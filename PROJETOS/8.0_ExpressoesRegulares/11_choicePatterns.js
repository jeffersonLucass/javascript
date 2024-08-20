const reg = /\w+: (Matheus|Roberta|jefferson)/;

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: jefferson"));
console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: lucas"));