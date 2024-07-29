const pessoa = {
    maos:2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)
console.log(pessoa.hasOwnProperty('maos'))


//prototype é um objeto vazio que tem como prototype o objeto Object.prototype	
//pessoa tem como prototype o objeto Object.prototype
//prototype serve para referenciar o objeto pai, ou seja, o objeto pessoa.