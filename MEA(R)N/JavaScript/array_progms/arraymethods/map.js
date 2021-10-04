var arr=[2,3,4,5,6,7]

// print squares of each number in the array
/*if there is no condition to apply on each 
elements of the array ,then we
 can use "map" method
*/ 
 //var squares=[];
// for(let num of arr){
//    squares.push((num**2))
// }

// using map

// map()
var res=arr.map((num)=>num**2);
console.log(res);