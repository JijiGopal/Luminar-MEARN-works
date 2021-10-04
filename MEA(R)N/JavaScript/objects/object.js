// object defenition {}
// object stores data as key value pairs
 var emp={id:1000,emp_name:"ram",desig:"developer",salary:25000}

 //check gender key is present or not

 console.log("gender" in emp);

 // add new key value pair gender:male

   emp["gender"]="male";
   console.log(emp);