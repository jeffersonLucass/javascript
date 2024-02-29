let verificar=function anobissexto(ano) {
    return(ano % 400==0) || (ano%4==0 && ano%100!=0)

}
console.log(verificar(2024))