var num=673;
var res=" ";
while (num!=0) {
    let digit=num%10;
    res+=digit;
    num=Math.floor(num/10);

}
console.log(res);

// diff btw var & let
// var is global
// let is block level scope