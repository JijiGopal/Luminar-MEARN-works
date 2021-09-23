// var num=15;
// if (num%15==0){
//     console.log("fiz");
// }

// else if(num%5==0){
//     console.log("bus");
// }

// else if(num%3==0){
//     console.log("fizbus");
// }


var num=15;
var res=" ";
if (num%3==0){
    res += "fizz";
}

if(num%5==0){
    res+=" buzz";
}
console.log(res);

// TYPE COMPARISON 

// type0f(var_name)

// TYPE AND CONTENT COMPARISON

// num1==num2 (== for type comparison)
// num1===num2 (=== strict match (type + content))