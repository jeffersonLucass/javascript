let a = 10

function multiplicar(x,y) {
    let a = x * y

    if (a > 10) {
        let a = 0
        console.log(a)  //escopo diferente da variavel a definida acima em que seu valor neste caso seria 20
    }

    console.log(a)
}

multiplicar(10,2)
console.log(a)