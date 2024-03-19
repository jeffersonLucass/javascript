let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let container_password = document.querySelector("#container-password")
let charset = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@"
let novaSenha = ''

sizePassword.innerHTML= sliderElement.value 
//utilizei oninput para pegar o valor do input e mostrar na tela
slider.oninput = function () {
    sizePassword.innerHTML = this.value;

}

function generatePassword(){
    
    let pass=''
    for(let i=0,n=charset.length;i<sliderElement.value;i++){
         pass+= charset.charAt(Math.floor(Math.random()* n))
        
    }
    container_password.classList.remove('hide');
    password.innerHTML= pass;
    novaSenha=pass;
    
}
function copypassword() {
    alert('senha copiada com sucesso')
    navigator.clipboard.writeText(novaSenha)
}