// lowest expense
var expenses=[2000,4000,5000,3500,7000];
    let low_exp=expenses[0];
    for(let amount of expenses){
         if(low_exp>amount){
             low_exp=amount;
          
         }
     }
     console.log(low_exp);

// highest expense

   var high_exp=expenses[0];
    for(let amount of expenses){
       if(high_exp<amount)
       high_exp=amount;
      }
    console.log(high_exp);

// expense > 3000
var high_exp=expenses[0];
for(let amount of expenses){
   if(high_exp>3000){
   amount++;
  
  }
}



   
