// Sample Input
// 1 2 3 4 5
// Sample Output
// 10 14
// Explanation
// The numbers are , , , , and . Calculate the following sums using four of the five integers:
// Sum everything except 1, 
// Sum everything except 2, 
// Sum everything except 3, 
// Sum everything except 4, 
// Sum everything except 5, 
function miniMaxSum(arr) {
  let final = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sub = arr.filter((item, index) => index !== j);
      let sum = sub.reduce((a, b) => a + b, 0);
      // console.log(sub);
      // console.log(sum);
      final.push(sum);
    }
  }
  console.log(Math.min(...final) + " " + Math.max(...final));
}