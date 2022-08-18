function toCamelCase(str){
  let f= "";
  if(str.includes("-")){
    f=str.split("-")
  }else{
    f=str.split("_")
  }
  let final =[];
  final.push(f[0])
  for(let i=1;i<f.length;i++){
   final.push(f[i].charAt(0).toUpperCase() + f[i].slice(1));
      
  }
  console.log(final.join(""));
  return final.join("");
}
toCamelCase("the_stealth_warrior");
toCamelCase("the-stealth-warrior");