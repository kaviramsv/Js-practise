// //Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const sums = (arr, target) => {
//   let final = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log(([i, j]))
//         return [i, j]
//       }
//     }
//   }
// }

// sums([2, 7, 11, 15], 9);

const diagonal = (matrix) => {

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
      if (i !== j && matrix[i][j] !== 0) {
        return "not diagonal"
      }
    }
  }
  return "diagonal"

}

console.log(diagonal([[1, 0, 0], [0, 2, 0], [0, 2, 3]]))