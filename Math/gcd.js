// gcd/hcf

// const gcd = (n1,n2)=>{
//   let hcf = 1;
//   for(let i=2;i<n1 && i<n2 ; i++ ){
//     if(n1%i ===0 && n2%i===0){
//       hcf=i;
//     }
//   }
//   return hcf;
// }
// console.log(gcd(60,72));

const gcd = (n1, n2) => {
  let hcf = 1;
  for (let i = 0; i < n1, i < n2; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      hcf = i;
    }
  }
  console.log(hcf)
  return hcf;
}
gcd(60, 72);