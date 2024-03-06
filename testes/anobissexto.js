let verificar=function anobissexto(ano) {
    //ira retornar true se o ano for bissexto or false se não for bissexto 
    return(ano % 400==0) || (ano%4==0 && ano%100!=0)

}
console.log(verificar(2024))