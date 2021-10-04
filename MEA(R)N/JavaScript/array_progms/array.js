//  possible to store same and diefferent object /data in js array
// size fixed or not
// var  arrayname=[elements];
var arr=[2,4,5,6,7,"hi"];
console.log(arr);
// insertion order is preserved . so we can use index value of the element to fetch them 

// fetching array elements index
// array index starting from 0-th index
//indexval   0,1,2,3,4, 5 
    var expenses=[2000,4000,5000,3500,3000];

// add 3000 rs more with feb exp (updation)
    expenses[1]+=3000;
    console.log(expenses);

 // to fetch value from first index
    console.log(expenses[4]);

// iterating through array (print all elements)

    for(i=1;i<expenses.length;i++){
        console.log(expenses[i]);
    }

// iteration using "of"

    for(let expense of expenses){
        console.log(expense);
    }

 // find total expense

    console.log("total expense");

    var total=0;
    for(let amount of expenses){
       total+=amount;
     }
    console.log(total);

 // print all amount < 3000

    console.log("amount below 4000:");

    for(let amount of expenses){
        if(amount<4000){
            console.log(amount);
        }
    }
 // or

    console.log(".......");

    for(let amount of expenses){
        console.log(amount<4000?amount:"");
    }

// enable strict mode -  "use strict"

// inserting an element to "end" of the array - push()
// expenses.push()- its a method and expenses.length- its a variable
   expenses.push(5500);
   console.log(expenses);

// remove an element from the end of an array - pop()
   expenses.pop();
   console.log(expenses);