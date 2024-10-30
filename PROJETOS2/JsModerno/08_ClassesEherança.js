class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
   
    productWithDiscount(discount) {
        return Math.round(this.price * ((100 - discount) / 100));
    }
}

const shirt = new Product('camisa gola v', 49.99); 
console.log(shirt.price)

console.log(shirt.productWithDiscount(50));

const tenis = new Product('tenis', 99.99);
console.log(tenis.productWithDiscount(20));




class ProductWithAttributes extends Product {
    constructor(name,price,colors) {
        super(name,price);
        this.colors = colors;
    }
    showColors() {
        console.log("As cores são:");
        this.colors.forEach((color) => {
            console.log(color);
        })
    }
}


const hat = new ProductWithAttributes('Chapeu', 29.99,['preto', 'branco', 'vermelho']);

console.log(hat.name);
console.log(hat.productWithDiscount(20));
hat.showColors();