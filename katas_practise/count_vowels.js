const numberOfVowels = function (data) {
  // Put your solution here

  let check = ["a", "e", "i", "o", "u"];

  let count = 0;


  for (let letter of check) {
    if (data.includes(letter)) {
     count++;
    }
  }
  return count;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));