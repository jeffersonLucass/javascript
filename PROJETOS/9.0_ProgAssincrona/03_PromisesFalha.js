let p = Promise.resolve(new Error("Ocorreu um erro"));

console.log("Outros códigos");

p.then((value) => console.log(value))
 .catch(reason => console.log("Falhou "+ reason));

 //metodo catch para capturar o erro