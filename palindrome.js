const palindrome = (word) => {
  console.log(word.split("").reverse());
  // [
  //   'm', 'a', 'l',
  //   'a', 'y', 'a',
  //   'l', 'a', 'm'
  // ]
  return word === word.split("").reverse().join("")
}

console.log(palindrome("mam"));