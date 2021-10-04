var arr=[1,2,3,4];
var elem_pair=6;;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]+arr[j]==elem_pair){
            console.log(`element pairs (${arr[i]},${arr[j]})`);
            break;
        }
    }
}
