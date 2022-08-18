function persistence(num) {
  //code me

for(var i=0;num>9;i++){
  console.log(num);
  num=num.toString().split('').reduce((t,c)=>c*t);
  console.log(num);
  console.log("------")
}
return i;
}
persistence(39);