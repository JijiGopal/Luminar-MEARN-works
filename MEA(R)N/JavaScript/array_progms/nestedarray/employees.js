var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1889,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//
console.log(employees[0][2]);

// print num of employees
 console.log(employees.length);

 // print num of developers
var count=0;
 for(let employee of employees){
     if(employee[3]=="developer"){
        count++;
     } 
 }
 console.log(count);

 // print experience of  each employees
 // subtract employee[5]-employee[4]

 for(let emp of employees){
     var exp=emp[5]-emp[4];
     console.log("experience:",exp);
 }

 // print highest salary
var high_salary=0;
for(let emp of employees){
    if(emp[2]>high_salary){
        high_salary=emp[2];
    }
}
console.log(high_salary);

 // print lowest salary
var low_salary=employees[0][2];
for(let emp of employees){
    if(emp[2]<low_salary){
        low_salary=emp[2];
    }
}
console.log(low_salary);


 // print name of developer who is taking highest salary

 // print name of highest experienced employee

 // print total sum of salary group by developers