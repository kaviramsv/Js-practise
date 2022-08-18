//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function sum(array,target){
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if(array[i]+array[j]===target){
        return [i,j];
      }
    }
  }
}

console.log(sum([2,7,11,15],9));