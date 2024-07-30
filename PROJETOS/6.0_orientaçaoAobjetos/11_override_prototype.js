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
Cachorro.prototype.patas = 4;

let poodle = new Cachorro("poodle","cinza");
let labrador = new Cachorro("labrador","amarelo");

console.log(labrador.patas);
console.log(Cachorro.prototype.raca);
console.log(poodle.raca);