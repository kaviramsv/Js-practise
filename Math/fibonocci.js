// const fibanocci = (num) => {
//   let n1 = 0;
//   let n2 = 1;
//   let sum = 0;

//   let final = []
//   final.push(n1, n2);

//   for (let i = 3; i <= num; i++) {//from 3rd index till the specified count is reached
//     sum = n1 + n2;
//     final.push(sum);
//     n1 = n2;
//     n2 = sum;
//   }
//   console.log(final);
// }
// fibanocci(8);

const fibo = (num) => {
  let n1 = 0;
  let n2 = 1;
  let final = [];
  final.push(n1);
  final.push(n2);
  let sum = 0;

  for (let i = 3; i <= num; i++) {
    sum = n1 + n2;
    final.push(sum);
    n1 = n2;
    n2 = sum;
  }

  console.log(final);


}
fibo(8);