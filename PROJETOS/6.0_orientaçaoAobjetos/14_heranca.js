class Mamifero{
    constructor(patas){
        this.patas = patas;
    }

}


let coiote = new Mamifero(4);

console.log(coiote);

class Cachorro extends Mamifero{
    constructor(raca, patas){
        super(patas,patas);
        this.raca = raca;
    }

    latir(){
        console.log("au au");
    }
}

let pug = new Cachorro("pug", 4);
console.table(pug)
pug.latir();