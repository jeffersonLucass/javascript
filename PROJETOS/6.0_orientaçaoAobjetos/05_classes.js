let cahorro ={
    patas:4,
    raca:'SRD',
    latir: function () {
        console.log("Au Au Au");
    }
}

let labrador = Object.create(cahorro);

labrador.latir();

labrador.raca = "labrador";
console.log(labrador.raca)

let pastor = Object.create(cahorro);

pastor.raca = "pastor alemao";

console.log(pastor.raca)