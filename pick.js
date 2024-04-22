/*
  Description :
  Creates an object composed of the picked object properties.

  Arguments :
  1) The source object.
  2) The property paths to pick.

  Returns :
  The new object.
*/

const pick = (object, property) => {
    const res = {};
    
    for (let i = 0; i < property.length; i++) {
        const key = property[i];
        res[key] = object[key];
    }
    return res;
};

console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])); // Must display { a: 1, c: 3 }