const conditionalSum = function(values, condition) {
  // Your code here
  let final=[];
  for(let i=0;i<values.length;i++){
    if(condition==="even"){
     if(values[i]%2===0){
     
      final.push(values[i]);
     }
    }else{
      if(values[i]%2===1){
        final.push(values[i]);
      }
    }

  }
  
  return final.reduce((a,b)=>a+b,0);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));//6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));//9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));