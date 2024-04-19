/*
  Description :
  Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new filtered array.
*/

const filter = (array, func) => {
    let newArray = [];
    
    if (func && array !== null) {
        for (let i = 0; i < array.length; i++) {
            if (func(array[i])) {
                newArray.push(array[i]);
            }
        }
    }

    return newArray;
}

const isBigEnough = (value) => {
    if (value >= 10) {
        return true;
    }
    return false;
}

console.log(filter([12, 5, 8, 130, 44], isBigEnough)); //  `[12, 130, 44]`

console.log(filter([1, 6, 173, 151])); //  `[]`

console.log(filter(null, isBigEnough)); // `[]