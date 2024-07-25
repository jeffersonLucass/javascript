let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor:'2.0' 
}
//Destructuring serve para desestruturar um objeto em variaveis

const {rodas: vRodas, portas:vPortas, tetosolar: vTetosolar, motor:vMotor} = obj;

console.table({vRodas, vPortas, vTetosolar, vMotor})