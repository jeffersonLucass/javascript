function carregar() {
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    var min=data.getMinutes()
    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos.`
    if (hora>=0 && hora < 12 ) {
        //Bom Dia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background='#BFC6D0'
    }else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src= 'imagens/tarde.jpg'
        document.body.style.background='#CF5500'
    }else{
        //Boa noite
        img.src= 'imagens/noite.jpg'
        document.body.style.background='#242B3D'
    }
}
  
