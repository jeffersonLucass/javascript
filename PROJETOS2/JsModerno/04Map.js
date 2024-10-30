// o metodo map percorre os itens e modifica o array

const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Calça jeans', price: 10.99, category: 'Roupas'},
]

products.map((product) => {
    if (product.category === 'Roupas'){
        product.onSale = true;
    }
})

console.log(products)