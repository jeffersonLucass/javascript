class contaBancaria{
    constructor(saldo_corrente,saldo_poupanca,juros){
        this.saldo_corrente = saldo_corrente;
        this.saldo_poupanca = saldo_poupanca;
        this.juros = juros;
    }

    deposito( valor ){
        this.saldo_corrente += valor
    }
    saque(valor){
        this.saldo_corrente -= valor
    }
    transferenciaCP(valor){
        this.saldo_corrente -= valor
        this.saldo_poupanca += valor
    }
    transferenciaCC(valor){
        this.saldo_corrente += valor
        this.saldo_poupanca -= valor
    }

    jurosDeAniversario(){
        let juros = (this.saldo_poupanca * this.juros) / 100;
        this.saldo_poupanca += juros;
    }
}
class contaEspecial extends contaBancaria{
    constructor(saldo_corrente,saldo_poupanca,juros){
        super(saldo_corrente,saldo_poupanca,juros*2);

    }
}


let conta = new contaBancaria(1000,5000,1)
conta.saque(500)
console.log(conta)
conta.deposito(5000)
console.log(conta)
conta.transferenciaCP(3000);
console.log(conta)
conta.jurosDeAniversario();
console.log(conta)

let conta2 = new contaEspecial(10000,50000,1)
console.log(conta2);
conta2.saque(5000);
console.log(conta2)
conta2.deposito(5000);
console.log(conta2)
conta2.transferenciaCC(3000);
console.log(conta2)
conta2.jurosDeAniversario();
console.log(conta2)





