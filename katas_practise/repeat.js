const repeatNumbers = function(data) {
  // Put your solution here
  let s = "";
  let final =[];
  for(let i=0;i<data.length;i++){
    // console.log("data : ",data[i]);
    for(let j=0;j<data[i][1];j++){
      s+=data[i][0];      
    }   
    final.push(+s);
    s="";
  }
  // console.log(final);
  return final.join(",");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));