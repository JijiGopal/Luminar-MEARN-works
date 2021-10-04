// convert text into an array



var person={
    p_id:100,
    p_name:"ram",
    age:30
}

// if("vaccinated" in person){
//     person.vaccinated=true;
// }
// else{
//     person.vaccinated=false
// }
// console.log(person);


// if("vaccinated" in person){
//     person.vaccinated+=1;
// }
// else{
//     person.vaccinated=1;
// }
// console.log(person);


// word count
var word_count={};
  var text="hai hello hai hello"  // [ 'hai', 'hello', 'hai', 'hello' ]
  var words=text.split(" ")

  for(let word of words){
      // check for hi is present in word count
      // if yes add current value+1 else word_count[word]=1;
    if(word in word_count){
       word_count[word]+=1;
    }
    else{
        word_count[word]=1;
    }

  }
  console.log(word_count);
  

