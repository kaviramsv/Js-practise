function toCamelCase(str) {
  let f = "";
  if (str.includes("-")) {
    f = str.split("-")
  } else {
    f = str.split("_")
  }
  let final = [];
  final.push(f[0])
  for (let i = 1; i < f.length; i++) {
    final.push(f[i].charAt(0).toUpperCase() + f[i].slice(1));

  }
  console.log(final.join(""));
  return final.join("");
}
toCamelCase("the_stealth_warrior");
toCamelCase("the-stealth-warrior");

// ====================================better version
// toCamelCase("the_stealth_warrior");
// toCamelCase("the-stealth-warrior");

// const trial = (sample) => {
//   let temp;
//   let items = ['-', '_'];
//   let final;
//   for (let item of items) {
//     if (sample.includes(item)) {
//       temp = sample.split(item);
//     }
//   }
//   console.log(temp);
//   final = temp[0];
//   for (let i = 1; i < temp.length; i++) {
//     final += temp[i][0].toUpperCase() + temp[i].slice(1);
//   }
//   console.log(final);

// }

// trial("the_stealth_warrior");
// trial("the-stealth-warrior");