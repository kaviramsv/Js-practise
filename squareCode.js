const squareCode = function (message) {
  // Put your solution here
  let trimmed_msg = message.split(" ").join("");
  // console.log("trimmed :",trimmed_msg);
  let len = trimmed_msg.length;//54
  let row_len = (Math.ceil(Math.sqrt(len)));//7.3=8
  let col = Math.ceil(len / row_len);
  // console.log(len," ",row_len," ",col)

  let big_arr = [];
  let row_string = [];
  let initial = 0;
  let final = row_len;

  ///-----------------------pushing strings of desired length into big array------------------- 
  for (let i = 0; i <= col - 1; i++) {
    row_string += trimmed_msg.substring(initial, final);
    initial += row_len;
    final += row_len;
    // console.log("array row :",row_string)
    big_arr.push(row_string);
    row_string = "";

  };
  console.log(big_arr);//[ 'chi', 'llo', 'ut' ]

  // --------------------------------------------------

  // console.log("x",big_arr.length);
  // console.log("y",big_arr[0].length);

  let final_str = "";
  let str = "";
  for (let i = 0; i <= big_arr[0].length - 1; i++) {
    for (let j = 0; j <= big_arr.length - 1; j++) {

      // console.log(big_arr[j][i]);
      if (big_arr[j][i]) {
        str += big_arr[j][i];
      }

    }
    str += " ";
    // console.log("str :",str);
    final_str += str;
    str = "";

  }
  return final_str;
}

// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));