const fibonocci = (num) => {

  let n1 = 0;
  let n2 = 1;
  let sum ;
  let final = [];
  final.push(n1);
  final.push(n2);
  for(let i=0; i<num-2; i++){
    sum = n1 + n2;
    final.push(sum);
    n1 = n2;
    n2 = sum;
  }
  return final;
}

console.log(fibonocci(15));