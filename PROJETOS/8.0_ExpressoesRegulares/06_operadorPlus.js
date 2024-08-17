const umOuMaisNumeros = /\d+/;
//O operador plus significa que o caractere deve ser repetido pelo menos uma vez.
console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test("12345"));
console.log(umOuMaisNumeros.test("asd"));

//ele aceita quase tudo,somente espaços vazios ou letras que ira gerar false.