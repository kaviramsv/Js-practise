const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//end represent the index(index not included;upto but not including) of items in that array.
// The original array will not be modified.


console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(1, 0));// []

console.log(animals);
console.log(animals.slice(1, -4));
console.log(animals);
console.log(animals.slice(1, 1));// []