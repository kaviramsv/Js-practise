const sumLargestNumbers = function(data) {
  // Put your solution here

  

  const findLarge=(data)=>{
    let large= data[0];
    for(let no of data){
      if(no>large){
        large=no;
      }
    }
    return large;
  }
  let first=findLarge(data);
  let index = data.indexOf(first);
  // console.log(first,index)
  let newData = data.filter(el=>el<first);//new array with elements less than the largest
  //console.log(newData)
  let second=findLarge(newData);
  // console.log(second);
  return first+second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));