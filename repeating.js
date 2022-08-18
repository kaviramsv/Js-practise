const repeatNumbers = function (data) {
  let final = [];
  for (let item of data) {
    const [val, no] = item;
    let whole = "";
    for (let i = 1; i <= no; i++) {
      whole += val;
    }
    final.push(whole);
  }
  return final.join(",");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));