function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({}); //cria um objeto vazio
    cachorro.raca = raca; //adiciona uma propriedade
    cachorro.patas = patas; //adiciona uma propriedade
    cachorro.cor = cor; //adiciona uma propriedade
    cachorro.latir = () =>{return console.log("Au Au Au")}
    return cachorro; //retorna o objeto
}

let doberman = criarCachorro('Doberman', 4, 'branco');

console.table(doberman);

doberman.latir();
