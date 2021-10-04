function primeNum(low,upp) {
    for(i=1;i<=low;low++){
        let flag = 0;
        var res="";
        for(j=2;j<=upp;j++){
            if(i%j==0){
                flag+=1;
                break;
            }

        }
        if(i>1 && flag==0){
            return i;
        }
    }
    
}
console.log(primeNum(4,20));