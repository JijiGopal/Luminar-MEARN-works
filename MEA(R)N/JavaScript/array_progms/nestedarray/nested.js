// nested array
var accounts=[
        [1000,"ram",15000,"savings"],
        [1001,"ravi",25000,"savings"],
        [1002,"akhil",30000,"current"],
        [1003,"nikil",35000,"savings"],
        [1004,"ajesh",35000,"current"],
        [1005,"tom",40000,"savings"],
        [1006,"jack",32000,"current"],
    ]
// print account names
for(let account of accounts){
    console.log(account[1]);
}

// print nemaes whose ac_type = savings
console.log("===============");
for(let account of accounts){
    if(account[3]=="savings")
    {
        console.log(account[1]);
    }
}
// print names whose balance > 30000
console.log("print names whose balance >2000");
for(let account of accounts){
    if(account[2]>30000){
        console.log(account[1]);
    }
}
