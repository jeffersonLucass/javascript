let elemento = document.querySelector('#titulo-principal');

console.log('largura= '+elemento.offsetWidth); //considera as bordas(largura)
console.log('altura = '+elemento.offsetHeight); //altura


console.log('largura= '+elemento.clientWidth); 
console.log('altura = '+elemento.clientHeight);