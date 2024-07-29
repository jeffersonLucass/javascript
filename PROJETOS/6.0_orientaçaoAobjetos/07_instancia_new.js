function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = () => console.log('au au');
}

let husky = new Cachorro('husky', 4, 'branco');
//new = cria um novo objeto
console.table(husky)
husky.uivar()