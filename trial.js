const multi = (num) => {
  for (let i = 1; i <= num; i++) {
    let final = " ";
    for (let j = i; j <= num * i; j += i) {
      final += j + " ";
    }
    console.log((final))
  }
}
multi(5);
// 1 2 3 4 5
// 2 4 6 8 10 
// 3 6 9 12 15 
// 4 8 12 16 20 
// 5 10 15 20 25 