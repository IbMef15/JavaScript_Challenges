/*
  Description :
  Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with one argument: value.
  
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new mapped array.
*/

const map = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;

};

const callback = value => {
    return value * 2;
};

console.log(map([1, 2, 3], callback)); //  `[2, 4, 6]`

console.log(map([4, 1, 3])); // `TypeError : callback is not a function`