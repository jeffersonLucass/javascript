class Voo{
    constructor(codigoVoo,origem,destino,assentosDisponiveis){
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }

    reservarAssento(){
        if (this.assentosDisponiveis > 0){
            this.assentosDisponiveis--;
        }
        else{
            console.log("Assentos indisponíveis");
        }
    }    
    consultarAssentosDisponiveis(){
        return this.assentosDisponiveis;
    }   
}

let passageiro = new Voo(123, "São Paulo", "Rio de Janeiro", 100);
passageiro.reservarAssento();
console.log(passageiro.consultarAssentosDisponiveis())