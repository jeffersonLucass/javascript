class Cachorro {
    constructor(raca,cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au Au");
    }

}


Cachorro.prototype.raca = "SRD";
let patas = Symbol();
Cachorro.prototype[patas] = 4;


let labrador = new Cachorro("labrador","amarelo");

labrador.latir();
console.log(Cachorro.prototype.raca);

//acessando symbol
console.log(labrador[patas]);
console.log(Cachorro.prototype[patas]);