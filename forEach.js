/*
  Description :
  Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with one argument: value.

  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
*/

const forEach = (arr, func) => {
    if (func !== undefined) {
        for (let i = 0; i < arr.length; i++) {
            func(arr[i]);
        }
    }
};

const callback = value => {
    console.log(value);
};

forEach([1, 2], callback);

forEach([3, 1]);  

forEach([], callback);

forEach();