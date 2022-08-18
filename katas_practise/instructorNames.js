const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let ct=0;
  let final;
  
  for(let item of instructors){
    //console.log(item["name"],item["name"].length);
    if(item["name"].length>ct){
      // console.log(item["name"],item["name"].length);
      ct=item["name"].length;
      final=item;
    }
  }
  return final;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}