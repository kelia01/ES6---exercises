// In this question, we would like you to demonstrate your understanding of array methods in JavaScript 
// by implementing the following four methods from scratch: myMap, myFilter, myReduce, and myForEach.
// Instructions:
// You are not allowed to use the built-in map, filter, reduce, or forEach methods in your implementation.
// Your implementations should work with arrays of any type.

// Each method should take a callback function as its argument and execute that callback function 
// for each element in the array (except for myReduce, which can take an optional second argument as the initial 
// accumulator value).
// The methods should return a new array (except for myForEach, which should return undefined).
// Array Methods to Implement:

// myMap(callbackFn): Creates a new array with the results of calling the provided function on every element in
// the calling array.
// myFilter(callbackFn): Creates a new array with all elements that pass the test implemented by the provided function.
// myReduce(callbackFn, initialValue?): Applies the callback function against an accumulator and each element
// in the array to reduce it to a single value. Optionally, an initialValue can be provided as the initial value 
// of the accumulator.
// myForEach(callbackFn): Executes a provided function once for each array element.

// const myFunction = arr => {
//     myMap (callbackFn);
//     myFilter (callbackFn); 
//     myReduce (callbackFn, initialValue);
//     myForEach (callbackFn);
// }
const myMap = (array, callbackFn) => {
    let newArr = [];
    for(item of arr){
      newArr.push(callbackFn(item, arr));
    }
    return newArr
}
const arr = [1, 2, 3, 4];
const squared = myMap(arr, num => num * num);
console.log(squared)