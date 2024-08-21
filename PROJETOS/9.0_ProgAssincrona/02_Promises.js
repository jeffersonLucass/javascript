let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((res) => {return res + 5})
 .then((res) => {console.log(res)});

