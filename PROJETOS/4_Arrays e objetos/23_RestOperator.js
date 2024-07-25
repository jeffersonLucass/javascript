let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;
//Rest Operator serve para passar quantos argumentos quiser..
function imprimirNumeros(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
        
    }
};

imprimirNumeros(num, num1, num2, num3);
imprimirNumeros(num2,num3);
imprimirNumeros(2,3,4,45,55,5,5,5); 