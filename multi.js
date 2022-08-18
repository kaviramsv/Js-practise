// const multiplicationTable = function (maxValue) {
//   // Your code here
//   let final = [];

//   function createRow(multiple){
//   let row =[];
//   for (let i = 1; i <= maxValue; i++) {
//     row.push(i*multiple);
//   }
//   return row;
//   }
//   for(let i=1;i<=maxValue;i++){
//     console.log(createRow(i));
//     final.push(createRow(i).join(" "));
//   }
//   return final;
// };

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));

const multiplicationTable = function (maxValue) {

  let final = [];
  for (let i = 1; i <= maxValue; i++) {
    final = [];
    for (let j = 1; j <= maxValue; j++) {
      final.push(i * j);
    }
    console.log(final.join(" "));

  }
  return "\n";
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));