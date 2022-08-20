const multi = (num) => {
  for (let i = 1; i <= num; i++) {
    let final = " ";
    for (let j = i; j <= num; j++) {
      final += j;
    }
    console.log((final))
  }
}
multi(5);
// 12345
// 2345
// 345
// 45
// 5