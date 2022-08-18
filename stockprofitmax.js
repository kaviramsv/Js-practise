// [44, 30, 24, 32, 35, 30, 40, 38, 15] shud give o/p of 16
function StockPicker(arr) { 

  // code goes here  
  let final=[];
  for(let i=0;i<arr.length;i++){
   let sliced=arr.slice(i);
   let highest=Math.max(...sliced);
   
   console.log(sliced,highest);
   final.push(highest-arr[i]);console.log(final);

  }
  return Math.max(...final); 

}
   
// keep this function call here 
console.log(StockPicker(readline()));