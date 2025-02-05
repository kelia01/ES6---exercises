// Create a Promise that resolves with a number 
// (e.g., 5).
// Chain .then() methods to double the number, then
//  subtract 3, and 
// finally print the result.

new Promise(function(resolve, reject){
    let num = 5;
    resolve(num);
}).then((num) => {
    num *= 2;
    num -= 3;
    console.log(num);
})