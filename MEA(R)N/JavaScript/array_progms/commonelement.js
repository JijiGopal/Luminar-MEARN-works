var arr1=[10,11,12,20,21];
var arr2=[20,21,22,23,24];
arr1.sort((num1,num2)=>num1-num2);
arr2.sort((num1,num2)=>num1-num2);

var pos1=0,pos2=0;
var count=0;

while((pos1<arr1.length) &(pos2<arr2.length)){
    if(arr1[pos1]==arr2[pos2]){
        console.log(arr1[pos1]);
    }
}
