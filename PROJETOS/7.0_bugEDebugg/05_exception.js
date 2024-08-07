function saudacao(nome){
    if (typeof nome != "string"){
        throw new Error("o parametro nome precisa ser uma string.");
               
    }
    else{
        console.log(`Ola,${nome}`);
    }
}


saudacao("Jefferson");
saudacao(10)