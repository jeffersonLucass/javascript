let novoElemento = document.createElement('p');
let texto = document.createTextNode('Novo Elemento');

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector('#titulo-principal');
let elementoPai = document.querySelector('#container-principal');

elementoPai.insertBefore(novoElemento,elementoAlvo);
// inserindo um novo elemento antes do elementoAlvo com insertBefore.

