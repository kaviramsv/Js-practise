// const factorial = (num) => {
//   if (num < 2) {
//     return num;
//   }
//   return num * factorial(num - 1);
// }

// console.log(factorial(5));const 

const fibanocci = (num) => {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  let final = []
  final.push(n1, n2);

  for (let i = 3; i <= num; i++) {
    sum = n1 + n2;
    final.push(sum);
    n1 = n2;
    n2 = sum;
  }
  console.log(final);
}
fibanocci(8);