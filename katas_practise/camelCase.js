const camelCase = function (input) {
  // Your code here
  let final = [];
  let ipArray = input.split(" ");

  final.push(ipArray[0]);
  let rem2 = ipArray.slice(1);
  console.log(ipArray,rem2);
  for (let word of rem2) {
    // console.log(word.charAt(0).toUpperCase()+word.slice(1));
    final.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return final.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious