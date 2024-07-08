let idade="16"
let possuiCNH=false

if (idade >= 18 && possuiCNH == false) {
    console.log("Não pode dirigir")
}else if(idade >= 18 && possuiCNH == true){
    console.log("Pode dirigir")
}else{
    console.log("Você nao tem permissao para dirigir ")
}