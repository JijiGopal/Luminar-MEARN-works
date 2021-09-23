var num1=7,num2=9,num3=6;
if((num1>num2) &(num1>num3)){
    if(num2>num3){
        console.log(`second largest is ${num2}`);
    }
    else{
        console.log(`second largest is ${num3}`);
    }
}
else if ((num2>num1) &(num2>num3)){
    if(num1>num3){
        console.log(`second largest is ${num1}`);
    }
    else{
        console.log(`second largest is ${num3}`);
    }
}
else if((num3>num1) &(num3>num2)){
    if(num1>num2){
        console.log(`second largest is ${num1}`);
    }
    else{
        console.log(`second largest is ${num2}`);
    }
}
else{
    console.log("three numbers are equal");
}