const reverse = (sentence) => {
  const temp = sentence.split(" ");
  let str = "";
  console.log(temp.length)
  for (let i = temp.length - 1; i >= 0; i--) {
    str += temp[i] + " ";
  }
  console.log(str.trim())

}

reverse("i am kavita")