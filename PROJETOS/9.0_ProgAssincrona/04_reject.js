function VerificarNumero(num) {
    return new Promise((resolve,reject) => {
        if (num == 2) {
            resolve(console.log(`O numero é ${num}`));
        }else{
            reject(new Error("falhou"));
        }
    });
}

VerificarNumero(2);
VerificarNumero(3);


