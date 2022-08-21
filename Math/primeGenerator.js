const primeGen = (num) => {
  let ct = 0;
  let final = [];
  let div = 0;
  for (let i = 2; ct < num; i++) {
    div = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        div += 1;
      }
    }
    if (div <= 2) {
      final.push(i);
      ct++
        ;
    }
  }
  return final;
}
console.log(primeGen(55))//generate 55 prime numbers