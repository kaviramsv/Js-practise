// It divides your function into multiple smaller functions that can 
// handle one responsibility. 
// This makes your function pure and less prone to errors and side effects
// modifying afunction of n arguments into n functions of one argument
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  }
}

let multiplyBy2 = multiply(2);
multiplyBy2(3);

