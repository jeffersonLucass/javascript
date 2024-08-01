class Endereco{
    constructor(Rua,Bairro,cidade,estado){
        this.Rua = Rua;
        this.Bairro = Bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    set novaRua(novaRua){
        this.Rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.Bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }


}

let endereco = new Endereco('Avenida Dr Oswaldo pierucetti','Sibipiruna','Araguari','MG');

console.log(endereco);

endereco.novaRua = 'Rua Dr. Osvaldo Pierucetti';
endereco.novoBairro = 'anangheura';
endereco.novaCidade = 'Uberlândia';
endereco.novoEstado = 'GO';

console.log(endereco)