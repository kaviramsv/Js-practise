

function SimpleAdding(num) { 

  if (num === 0) {
      return num;
  } 
  
  return num + SimpleAdding(num-1);
}
console.log(SimpleAdding(35));