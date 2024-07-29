const cachorro = {
    raça:'SRD',
    uivar: function(){
        console.log("au au");
    },
    rosnar: function(){
        console.log("grrrrrr");
    },
    setRaca: function(raça){
        this.raça = raça;
    },
    getRaca: function (){
        return "A raça é: " + this.raça
    }
};
//this serve para referenciar o objeto,ou seja, o objeto cachorro.
console.log(cachorro.raça);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raça);

console.log(cachorro.getRaca())