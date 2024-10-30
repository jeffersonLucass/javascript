const fruits = ['Apple', 'Banana', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);


const productDetails = {
    name: 'Notebook',
    price: 1999.99,
    color: 'Black',
    category: 'Computers'
}


const {name: productName, price, category,color} = productDetails;

console.log(`O nome do produtos é ${productName} e o preço é ${price} o cor é ${color} e a categoria é ${category}`);