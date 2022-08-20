// methods to iterate over items of an array and make some computations;
//they all take a cb fn and applies it to each element of the array


//Map => create a new array from an existing array;by applying a function to each element of first array

const nums = [1, 2, 3, 4];

const newNums = nums.map((num, i, arr) => num * 3);
console.log(newNums);

//Filter => create a new array from an existing array;by applying a condition to each element of first array
//only items that fulfills the condn get pushed into the new array

const filNums = nums.filter((num, i, arr) => num > 2);
console.log(filNums);

//Reduce methods reduce an array of values to just single value;
// takes call back and initial IDBCursorWithValue;

const reduceNums = nums.reduce((acc, ct, i, arr) => acc + ct);

//const reduceNums = nums.reduce((a, b) => {a + b}, 0);this will give error u have to use return

console.log(reduceNums);

//======================================================================

// polyfill for map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  return temp;
}
const nums1 = [1, 2, 3, 4];
const customMap = nums1.myMap(num => 3 * num);
console.log(customMap);

//===================================
// polyfill for filter

Array.prototype.customFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i])
  }
  return temp;
}
const num2 = nums1.customFilter(a => a > 3);
console.log((num2))

// ======================================

// polyfill for reduce
Array.prototype.customReduce = function (cb, initial) {
  let accumulator = initial;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
  }
  return accumulator;
}
const num3 = nums1.customReduce((a, b) => a + b, 0);
console.log((num3))