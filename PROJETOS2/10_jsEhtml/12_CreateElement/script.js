
function adicionarTarefa() {
    // Obtém o valor digitado no campo de texto
    
        let textoTarefa = document.getElementById('tarefa').value;
        // Cria um novo item de lista
        let item = document.createElement('li');
        // Adiciona o texto ao item de lista
        let texto = document.createTextNode(textoTarefa);
        item.appendChild(texto);
        // Adiciona o item à lista existente
        let lista = document.getElementById('lista-tarefas');
        lista.appendChild(item);
   

    // Limpa o campo de texto
    document.getElementById('tarefa').value = '';
}
