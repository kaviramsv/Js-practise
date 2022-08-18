const checkAir = function (samples, threshold) {
  // Code here!
  let total= samples.length;
  let dirty = 0;

  for(let sample of samples){
    if(sample === "dirty"){
      dirty++;
    }
  }

  let percentage = dirty/total;
  console.log(percentage);

  if(percentage < threshold)
      return "Clean";
  else
      return "Polluted";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))