const prime = (num) => {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
    }
  }
  return flag;
}

console.log(prime(4))