var low=4,upp=80;
for(let i=low;i<=upp;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0){
        console.log(i);
    }
}