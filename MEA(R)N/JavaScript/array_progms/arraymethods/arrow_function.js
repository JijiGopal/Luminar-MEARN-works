// anonymous fuction , nameless fuction
var add=(num1,num2)=>{
    return num1+num2
}
// here add is a variable not a function name
console.log(add(10,20));

// then we can remove {} and return

var ad=(num1,num2)=>num1+num2
console.log(ad(50,60));

// multiplication
var mul=(num1,num2)=>num1*num2

// division
var div=(num1,num2)=>num1/num2

// square 
var squaree=(num1)=>num1**2

// cube

var cube=(num1)=>num1**3


// is start with a

var name="arun";
function isStartWitha(name) {
    return name[0]=="a"?true:false
}

// convert it into arrow function
var isStartWithA=(name)=>name[0]=="a"?true:false

// is even
var isEven=(num)=>num%2==0?true:false

// is odd
var isOdd=(num)=>num%2==0?false:true
  
// subtraction of lowest value from highest value
  function  sub(num1,num2) {
      if(num1>num2){
          num1-num2;
      }
      else{
          num2-num1;
      }
  }
  // we can write it as
    num1>num2?num1-num2:num2-num1
  // arrow fuction
    var sub=(num1,num2)=>num1>num2?num1-num2:num2-num1
// largest among two
  var largest=(num1,num2)=>num1>num2?num1:num2

  // array methods(map,filter,reduce,sort,some,find,forEach)