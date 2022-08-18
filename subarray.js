function MaxSubarray(arr) { 

  // code goes here  
  let final=[];
  for(let i=0;i<arr.length;i++){
    
    for(let j=i+1;j<arr.length;j++){
    
      let sub_arr= arr.slice(i,j);
      let sum = sub_arr.reduce((a,b)=>a+b,0);
      final.push(sum);   
  
    }
   
  }
  console.log(final)
  return Math.max(...final); 

}
   
// keep this function call here 
console.log(MaxSubarray(readline()));