var arr=[10,11,13,14,12];
var element=13;
// arr.length starts from 1 , array index value starts from 0 , thus we take upp = arr.length-1
var low=0,upp=arr.length-1;
var flag=0;
// actual defenition is 
// arr.sort((num1,num2)=>num1-num2?-1:1) 
// simlified as 
// for ascending order   ... for descending order put =>num2-num1
arr.sort((num1,num2)=>num1-num2);
console.log(arr);
while (low<upp) {
    mid=Math.floor((low+upp)/2)
   if(element<arr[mid]){
      upp=mid-1;
   }
   else if(element>arr[mid]){
      low=mid+1;
   }
   else if(element==arr[mid]){
       flag+=1;
       break;
   }
    
}
var res=flag==1?"element found":"element not found"
console.log(res);
