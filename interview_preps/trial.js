// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     Promise.resolve("completed")
//   }, 3000)
// });

// let promise2 = Promise.resolve("promise 2 resolved");
// let promise3 = 4000;

// Promise.all([promise1, promise2, promise3])

const instructorWithLongestName = function (instructors) {

  let ct = 0;
  let item = null;

  for (let instructor of instructors) {
    if (instructor.name.length > ct) {
      ct = instructor.name.length;
      item = instructor;
    }
  }
  return item;
}
console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));