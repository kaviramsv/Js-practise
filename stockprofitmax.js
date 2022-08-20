// [44, 30, 24, 32, 35, 30, 40, 38, 15] shud give o/p of 16


const stock = (arr) => {
  let final = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let item = arr[i];//44
    let maxRest = Math.max(...arr.slice(i + 1));
    //math.max[ 30, 24, 32, 35,30, 40, 38, 15]= 40
    console.log(item, maxRest);
    final.push(maxRest - item);//final.push(44-40)
  }
  console.log(final);
  console.log(Math.max(...final));
  return Math.max(...final);
}
stock([44, 30, 24, 32, 35, 30, 40, 38, 15]);
//============================================
// function StockPicker(arr) { 
// [44, 30, 24, 32, 35, 30, 40, 38, 15] shud give o/p of 16
//   // code goes here  
//   let final=[];
//   for(let i=0;i<arr.length;i++){
//    let sliced=arr.slice(i);
//    let highest=Math.max(...sliced);
   
//    console.log(sliced,highest);
//    final.push(highest-arr[i]);console.log(final);

//   }
//   return Math.max(...final); 

// }
   
// // keep this function call here 
// console.log(StockPicker(readline()));