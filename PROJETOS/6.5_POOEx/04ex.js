class carro{
    constructor(marca,cor,gasolina_Restante,consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolina_Restante = gasolina_Restante;
        this.consumo = consumo;
    }

    dirigir(km){

        let litrosConsumidos = km / this.consumo;
        this.gasolina_Restante -= litrosConsumidos;

        
    }

    abastecer(litros){
        this.gasolina_Restante += litros;
    }

    
}


let Carro = new carro('toyota','prata',100,14);

console.log(Carro)

Carro.dirigir(100)

console.log(Carro)
Carro.abastecer(10)
console.log(Carro)
