function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = () => console.log('au au');
Cachorro.prototype.latir = () => console.log('ru fu ru fu');



let husky = new Cachorro('husky', 4, 'branco');

husky.uivar();
husky.latir();