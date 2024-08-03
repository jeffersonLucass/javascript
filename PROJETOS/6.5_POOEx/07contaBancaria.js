class ContaBancaria{
    constructor(numeroConta,saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    
    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }else{
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo(){
        return this.saldo;
    }
}

let conta = new ContaBancaria(1000,1000);
conta.sacar(2000);
console.log(conta.consultarSaldo());