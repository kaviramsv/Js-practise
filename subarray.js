function MaxSubarray(arr) {

  // code goes here  
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      let sub_arr = arr.slice(i, j + 1);//find sub array
      let sum = sub_arr.reduce((a, b) => a + b, 0);//find sum of sub array
      final.push(sum);// push into final array

    }
  }
  console.log(final)
  return Math.max(...final);

}

console.log(MaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6