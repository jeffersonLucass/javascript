
function reversedStr(texto){
    let stringReversa= "";
    for(let i = texto.length - 1; i >= 0; i--){
        stringReversa+= texto[i];
    }
    return stringReversa
}

console.log(reversedStr("Matheus"));
