const persistence = (num) => {
  let temp = num;
  while (temp > 9) {
    temp = temp.toString().split('').reduce((a, b) => a * b);
    console.log(temp);
  }
}
persistence(39)