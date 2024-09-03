let novoElemento = document.createElement('p');
let texto = document.createTextNode('Novo Elemento');

novoElemento.appendChild(texto);

let p =document.querySelector('#paragrafo-principal');
let pai = p.parentNode;

pai.appendChild(novoElemento);

//append child pode ser usado para adicionar um novo elemento a um elemento pai.