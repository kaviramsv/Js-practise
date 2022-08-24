const instructorWithLongestName = function (instructors) {
  // Put your solution here

  let nameObject = null;
  let longest = 0;

  for (const item of instructors) {
    if (item.name.length > longest) {
      longest = item.name.length;
      nameObject = item;
    }
  }
  return nameObject;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));

// const instructorWithLongestName = function (instructors) {
//   // Put your solution here

//   let nameLength = instructors.map(ins => ins.name.length);
//   let max = Math.max(...nameLength);
//   let ind = nameLength.indexOf(max);

//   return instructors[ind];
// };
