function recursao(n) {
    if (n-1 < 2) {
        console.log("recursao parou")
    }else if(n % 2 != 0){
        console.log("numero ímpar")
        recursao(n-1)
    }else{
        console.log("numero par")
        recursao(n-2)
    }
}


console.log(recursao(39))
console.log(recursao(10))
console.log(recursao(55))
