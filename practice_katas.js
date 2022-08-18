// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

const largest = (arr)=>{
  let final = [];
  let large ;
  const find = (a)=>{
   large = a[0];
    for (const item of a){
      if(item>large){
        large = item;
      }
    }
    final.push(large);
  }
  

  find(arr); 
  const result = arr.filter(item=> item < large);
  console.log(result);
  find(result);  
  console.log(final);
}

largest([10, 4, 34, 6, 92, 2]);