const prime = (n1,n2)=>{
let flag = 0;
let final = [];
for(let i=n1;i<n2;i++){
  flag=0;
  for(let j=2;j<i;j++){
    if(i%j===0){
      console.log(i,j)
      flag++;
      break;
    }
  }
  if(flag===0){
    final.push(i);
  }
}
console.log(final);
}
prime(1,30);