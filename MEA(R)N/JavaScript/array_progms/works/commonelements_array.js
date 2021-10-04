 var arr1=[10,20,21,22];
 var arr2=[11,12,20,21];
// var com_elem="";
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             com_elem+=arr1[i]+" ";
//         }
//     }
// }
// console.log(`common elements: ${com_elem} `);

arr1.sort((num1,num2)=>num1-num2);
arr2.sort((num1,num2)=>num1-num2);
var pos1=0,pos2=0;
var count=0;

while ((pos1<arr1.length) & (pos2<arr1.length)) {
    if(arr1[pos1]==arr2[pos2]){
        console.log(arr1[pos1]);
        pos1++;
        pos2++;
    }
    else if(arr1[pos1]<arr2[pos2]){
        pos1++;
    }
    else if(arr1[pos1]>arr2[pos2]){
        pos2++;
    }
    count++;
}
console.log("iteration:", count);
