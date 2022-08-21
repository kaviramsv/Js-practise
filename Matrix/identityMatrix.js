//better way
const identical = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ((i !== j && matrix[i][j] !== 0) || (i === j && matrix[i][j] !== 1)) {
        return "not identical";
      }
    }
  }
  return "identical";
}
console.log(identical([[1, 0, 0], [2, 1, 0], [0, 0, 1]]))



const identity = (matrix) => {
  let flag = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let rows = matrix.length;
      let cols = matrix[i].length;
      if (cols !== rows) {
        return "matrix need to be of same length";
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let value = matrix[i][j];

      if (i !== j && value !== 0) {
        flag = 1;
      }
      if (i === j && value !== 1) {
        flag = 1;
      }
    }
  }
  if (flag === 0) {
    return "identical";
  } else {
    return "non identical"
  }

}

console.log(identity([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]));
console.log(identity([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
console.log(identity([[1, 0, 1], [0, 1, 0], [0, 0, 1]])) 