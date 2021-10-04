var arr=[2,3,4,5,6,7]
// even numbers from this array
/* if we apply a condition on every 
elements of the array 
then we can use the method filter */

// even numbers from this array
var evens=arr.filter(num=>num%2==0)
console.log(evens);

// print numbers > 3
  var res=arr.filter(num=>num>3)
  console.log(res);

// print all odd numbers
  var oddnum=arr.filter(num=>num%2!=0)
  console.log(oddnum);