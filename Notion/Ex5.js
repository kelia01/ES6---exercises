// Write a function that takes a nested array of numbers and returns a new array that is flattened (one level deep) and contains only 
// the unique numbers, in ascending order.

const flattenAndUnique = arr => {
    const set = [...new Set(arr.flat())];
    return set;
}

const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = flattenAndUnique(nestedArray);
console.log(result); // Output: [1, 2, 3, 4, 5]