// you are given an object with properties that may contain null or undefined values. Your task is to implement
// a function called convertNullableValues that checks if any of the properties in the object contains null or
// undefined. If a property is null convert it to zero and if a property is undefined convert it to an empty string.
// Return the modified object.

const convertNullableValues = Obj => {
    for(key in Obj){
      if (Obj[key] === null){
        Obj[key] = 0;
      }
      if (Obj[key] === undefined){
        Obj[key] = '';
      }
    }
    return Obj;
}

const myObject = {
    name: "John Doe",
    age: null,
    address: undefined,
    email: "johndoe@example.com",
    phone: null,
    isActive: true,
    lastLogin: undefined
};
console.log(convertNullableValues(myObject))