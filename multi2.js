const trial = (num) => {
  let final = [];
  for (let i = 1; i <= num; i++) {
    let temp = " ";
    for (let j = ((i - 1) * num) + 1; j <= num * i; j++) {
      temp += j + " ";
    }
    console.log(temp)
  }

}
trial(5);
//
//  1 2 3 4 5 
//  6 7 8 9 10 
//  11 12 13 14 15 
//  16 17 18 19 20 
//  21 22 23 24 25