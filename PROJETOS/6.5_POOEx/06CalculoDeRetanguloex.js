class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        return this.largura * this.altura;
    }

    calcularPerimetro(){
        return(2 * (this.largura + this.altura));
    }
}

let retangulo = new Retangulo(10, 5);
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());