function soma(a,b) {
    if (a===undefined || b===undefined) {
        console.log("Essa função precisa de dois argumentos")
    }else return a + b
}


console.log(soma(5,5))



function saudacao(nome,idade){
   if (idade === undefined) {
      console.log("Ola "+nome)
   }else return console.log("Ola "+nome+" você tem "+idade+" anos")
}


console.log(saudacao("Jefferson"))
console.log(saudacao("Jefferson",19))