let pessoa = {
    "nome":"Jefferson",
    "idade":19,
    "profissao":"programador",
    "hobbies":["Video Game","Leitura","correr"]

}

let pessoaTexto = JSON.stringify(pessoa)
//Json.stringify converte o objeto em texto
console.log( pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)
//Json.parse converte o texto em objeto
console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[2])
