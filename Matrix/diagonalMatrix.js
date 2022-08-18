const diagonalCheck = (matrix) => {
  let flag = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      // console.log(matrix[i][j]);
      let value = matrix[i][j];

      if (i !== j && value !== 0) {
        flag = 1;
        console.log(flag);
      }
    }
  }

  if (flag === 0) {
    return "diagonal"
  } else {
    return "non diagonal"
  }
}
console.log(diagonalCheck([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
console.log(diagonalCheck([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));