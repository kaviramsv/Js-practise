// sums([1, 2, 3, 4, 5], "even")


const sums = (arr, condn) => {

  let condition = condn;
  let final = [];
  let sum = 0;

  if (condition === "odd") { 
      for(let item of arr){
        if(item %2 === 1){
        final.push(item);
        } 
      }    
    }
   else {
      for(let item of arr){
        if(item %2 === 0){
        final.push(item);
        }  
      }     
  }
  
  for(let item of final){
    sum += item ;
  }
  return sum;

}

console.log(sums([1, 2, 3, 4, 5], "even"));
console.log(sums([1, 2, 3, 4, 5], "odd"));
console.log(sums([13, 88, 12, 44, 99], "even"));
console.log(sums([], "odd"));