var arr=[2,8,5,10,5];
arr.sort((num1,num2)=> num1-num2)
var element=10;
var low=0,upp=arr.length-1;

var flag=0
while (low<=upp) {
   let mid=math.floor((low+upp)/2);
    //case1:
    if(element<arr[mid]){
       upp=mid-1;
    }
    else if(element>arr[mid]){
           low=mid+1
    }
    else if(element==arr[mid]){
        flag=1;
        break;
    }
}

// if (flag==0){
//     console.log("element not found");
// }
// else{
//     console.log("element found");
// }

console.log(flag==0?"element not found":"element found");