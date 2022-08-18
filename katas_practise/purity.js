const checkAir = function (samples, threshold) {
  // Code here!
  let ct = 0;
  for(let it of samples){
    if(it === "dirty"){
      ct++;
    }
  }
  if(threshold<ct/samples.length){
    return "polluted";
  }else{
    return "clean";
  }
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