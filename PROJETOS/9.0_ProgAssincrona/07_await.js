//A instrução await espera uma promise ser resolvida, para apresentar os resultados de forma assíncrona.

function somaComDelay(a,b){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a+b);
        }, 4000);
    });
}


async function reSoma(a,b,c){
    let x = somaComDelay(a,b);
    let y = c;
    
    return await x + y;
}


console.log(reSoma(1,2,3).then(value => console.log(value)));