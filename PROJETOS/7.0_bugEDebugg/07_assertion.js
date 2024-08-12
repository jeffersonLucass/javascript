let arr = [1,2,3,4,5];
let arr2 = [];


function iterarArray(arr){
    if (arr.length == 0) {
        throw new Error("Array vazio");
    }else{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

function ArrayVazio(arr){
    if (arr.length > 0 ) {
        throw new Error("O array não pode ter elementos");
    }else{
        console.log("Agora deu certo");
    }
}


iterarArray(arr);
iterarArray(arr2);
ArrayVazio(arr2);
ArrayVazio(arr);