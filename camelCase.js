const camelCase = function(input) {
  // Your code here
  let nameArray = input.split(" ");
  let final = nameArray[0];
  for(let i=1;i <= nameArray.length-1 ; i++){
    final += nameArray[i][0].toUpperCase() + nameArray[i].substring(1,);
  }
  return final;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));