var agora = new Date()
var hora= agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora sao exatamente ${hora} horas e ${minutos} minutos.`)
if (hora < 12) {
    console.log('Bom Dia!')
}else if (hora <= 18) {
    console.log('Boa tarde !')
}else{
    console.log('Boa noite!')
}