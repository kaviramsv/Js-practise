function init() {
  var name1 = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name1); // use variable declared in the parent function
  }
  name1 = "Kavita";
  displayName();
}

init();