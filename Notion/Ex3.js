// Write a function that takes an array of objects, where each object has a type property. The function should return an object where
//  the keys are the unique type values, and the values are the number of occurrences of that type in the input array.

const uniqueType = arr => {
    const result = {};
    for (const {type} of arr){
        result[type] = (result[type] || 0) + 1
    }
    return result;
}

const items = [
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'fruit' },
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'grain' },
  ];
  console.log(uniqueType (items));