let novoElemento = document.createElement('p');
let texto = document.createTextNode('Novo Elemento');

novoElemento.appendChild(texto);
// criando um novo elemento
let heading = document.querySelector('#titulo-principal');
// selecionando um elemento
let paiheading = heading.parentNode; //retorna o elemento pai

paiheading.replaceChild(novoElemento, heading);
// substituindo um elemento pelo outro