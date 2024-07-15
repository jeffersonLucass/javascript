function VerificaçãoTipoDeDado(desconhecido) {
    if (typeof desconhecido === 'number') {
        console.log("e um numero")
    }else if (typeof desconhecido === 'string') {
        console.log("e uma string")
    }else if(typeof desconhecido === 'boolean'){
        console.log("e um boolean")
    }
}

VerificaçãoTipoDeDado(10)
VerificaçãoTipoDeDado("10")
VerificaçãoTipoDeDado(true)
VerificaçãoTipoDeDado(false)
VerificaçãoTipoDeDado("olha que coisa mais linda")