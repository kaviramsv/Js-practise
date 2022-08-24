//Abstraction with closures
function closureFunction() {
  let x;
  function Init() {
    x = 0;
  }
  function Inc() {
    x++;
    console.log(x);
  }
  function Dec() {
    x--;
    console.log(x);
  }
  Init();
  return { Inc, Dec };
}

let fn1 = closureFunction();
fn1.Inc();
fn1.Inc();
fn1.Inc();
fn1.Dec();