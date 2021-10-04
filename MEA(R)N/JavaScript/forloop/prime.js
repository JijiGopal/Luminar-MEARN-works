// program for checking the given number is prime or not

var num=12;
var flag=0;

for(let i=2;i<num;i++){ 
    if(num%i==0){   // 12%2=0 
          flag+=1;  // flag= 0+1, not prime

          break;
    }
    
}
// if(flag==0){
//     console.log("is prime");
// }
// else{
//     console.log("not prime");
// }
 
console.log(flag==0?"is prime":"not prime");