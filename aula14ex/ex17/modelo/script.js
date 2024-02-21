function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
       alert('Por favor,digite um número!')
    }else{
        let n = Number(num.value)
        let c=1;
        //LIMPAR A TABUADA ANTES DE SER MOSTRADA
        tab.innerHTML=''
        while (c<=10) {
           let item = document.createElement('option') 
           item.text = `${n} x ${c} = ${n*c}`
           //ADICIONAR ELEMENTO FILHO A TABUADA
           tab.appendChild(item)
           c++
        }
    }
    
}