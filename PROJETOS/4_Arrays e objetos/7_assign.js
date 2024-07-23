let carro ={
    portas : 2,
    portamalas : "200l",
    motor:'2.0'
}

let adicionais = {
    airbag:true,
    vidroEletrico:true
}


Object.bind(carro,adicionais)

console.table(carro)