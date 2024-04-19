/*
  Description :
  Gets the size of collection by returning its length.

  Arguments :
  1) The collection to inspect.

  Returns :
  The collection size.
*/

const size = (collection) => {
  if (typeof collection === 'string' || Array.isArray(collection)) {
    return collection.length;
  }

  return 0;
};

console.log(size("pebbles")); // `7`

console.log(size([1, 2, 3])); // `3`

console.log(size()); // `0`

console.log(size(null)); // `0`

console.log(size(10)); // `0`

console.log(size(true)); // `0`