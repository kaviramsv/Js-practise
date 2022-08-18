const numberOfVowels = function(word) {
  // Put your solution here
  let count = 0;
  let arr = ["a","e","i","o","u"];
  let data = [...word];
  for(let vowel of arr){
    for(let letter of data){
        if(vowel === letter ){
          count ++;
        }
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));