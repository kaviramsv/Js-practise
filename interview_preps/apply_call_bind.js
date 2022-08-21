//helps to change the context of the invoking function

let person1 = {
  fname: "a",
  lname: "b"
}
let person2 = {
  fname: "c",
  lname: "d"
}

let print = function (state, cty) {
  console.log(this.fname + this.lname + " is from " + state + " in " + cty);
}
print.call(person1, "kerala", "in");
print.call(person2, "chennai", "In");

print.apply(person1, ["kerala", "in"]);
print.apply(person2, ["chennai", "In"]);

let pr1 = print.bind(person1, "kerala", "in");
pr1();
