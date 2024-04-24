/*
  Description :
  Iterates over elements of collection, returning the first element matching keys and values of the object given in second argument.

  Arguments :
  1) The collection to inspect.
  2) The filter object
  
  Returns :
  The matched element, else null.

*/

const find = (collection, filter) => {

    const keys = Object.keys(filter);
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            
            let key = keys[j];
            let object = collection[i];
            if (filter[key] === object[key]) {
                return object;
            }
        }
        
        return null;
    }
};

const users = [
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

console.log(find(users, { lastName: "Doe", gender: "male" }));
// Must display { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

const countries = [
    { name: "France", capital: "Paris" },
    { name: "Allemagne", capital: "Berlin" },
    { name: "Belgique", capital: "Bruxelles" },
];

console.log(find(countries, { capital: "Bruxelles" }));
// Must display { name: "Belgique", capital: "Bruxelles" }