function checarNum(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        console.log('Por favor,passe somente numeros para o programa');
    }else{
        return number;
    }
}


checarNum(5);
checarNum('sadh');
checarNum('5');