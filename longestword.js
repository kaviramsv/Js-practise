function LongestWord(sen) { 

  // code goes here  
  let arr = sen.split(" "); 
  const len =arr.map(item=>item.length);
  const max= Math.max(...len);
  console.log(max);
  const ind= len.indexOf(max)
  return arr[ind]; 

}
   
// keep this function call here 
console.log(LongestWord("whatsadsads is happening"));