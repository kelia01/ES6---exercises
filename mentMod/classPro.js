// 1. Create a class Product with properties name (string), price (number), and methods:
//     - `getDetails()`: Returns a string representation of the product details (name and price).
//     - `applyDiscount(discount)`: Applies a discount (percentage) to the product's price and returns the discounted price.

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
     Details(){
     return `name: ${this.name} price: ${this.price}`;
    }
    applyDiscount(discount){
        const discountPri = this.price * discount;
        const discounted = this.price - discountPri;
     
       return `Discounted price ${discounted}`;
    }
}

const pro = new Product('kelia', 1000);
console.log(pro.applyDiscount(2/100))