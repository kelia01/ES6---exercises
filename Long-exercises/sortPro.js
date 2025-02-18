// You are given an array of product objects, each containing a name (string) and a price (number). 
// Your task is to implement a function called sortProducts that sorts the products based on their prices in
//  ascending order. 

const sortProducts = arr => {
    for ({price} of arr){
        arr.sort((a,b) => a.price - b.price);
    }
    return arr;
}
const products = 
   [ { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Headphones", price: 150 },
    { name: "Smartwatch", price: 200 },
    { name: "Tablet", price: 500 },];
console.log(sortProducts(products))