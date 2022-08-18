const reverse = (sentence) =>{

  let sentenceArray = sentence.split(" ");

  let final = [];

  for(let word of sentenceArray){
 
    let reversed = " ";
  
    for(let i = word.length-1 ; i >= 0; i--){
       reversed +=word[i];  
    }
    final.push(reversed);

  }   
  
  console.log(final.join(" "));
  
  }
  
  reverse("Welcome to this Javascript Guide!");
