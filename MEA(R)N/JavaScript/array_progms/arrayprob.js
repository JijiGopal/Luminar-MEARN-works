var arr=[2,3,4,5,6,7,8]; // out put array should be [1,2,3,7,8,9]
var op_arr=[];
for(let num of arr){
    // if(num<5){
    //     op_arr.push(num-1);
    // }
    // else if(num==5){
    //       op_arr.push(num)
    // }
    // else{
    //     op_arr.push(num+1);

    // }
// using ternary operator
    num<5?op_arr.push(num-1):num>5?op_arr.push(num+1):op_arr.push(num);
}
console.log(op_arr);


