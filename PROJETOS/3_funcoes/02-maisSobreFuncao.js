function multiplicarTresNumeros(x,y,z) {
    return x * y * z
}

console.log(multiplicarTresNumeros(2,3,4))


const mult = multiplicarTresNumeros(5,4,8)

console.log(`O valor de mult é: ${mult}`)

function podeDirigir(idade,cnh) {
    if (idade >=18 && cnh ==true) {
        console.log("pode dirigir")
    }else if(idade >=18 && cnh ==false) {
        console.log("Não pode dirigir")
    }else{
        console.log("Você não tem permissão para dirigir")
    }
}

podeDirigir(16,false)
podeDirigir(18,true)
podeDirigir(15,false)
podeDirigir(20,1)  

/*
  pode ser passado como parametro 0 e 1 representando falso e verdadeiro respectivamente. Levando em consideração a lógica booleana

*/
