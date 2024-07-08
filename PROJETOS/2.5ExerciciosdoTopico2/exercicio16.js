function classificarNumero(num) {
    if (num > 0 && num % 2 === 0) {
        return "Positivo e Par";
    } else if (num > 0 && num % 2 !== 0) {
        return "Positivo e Ímpar";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }
}


console.log(classificarNumero(4));  
console.log(classificarNumero(3)); 
console.log(classificarNumero(-2)); 
console.log(classificarNumero(-5)); 
console.log(classificarNumero(0));  
