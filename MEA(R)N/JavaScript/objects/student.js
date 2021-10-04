var student={
    roll:10,
    name:"ajas",
    course:"bca",
    total:748
}

// print student name
console.log(student.name);


// update total as 800
student.total=800

//check for grade key is present or not

console.log("grade" in student);

// add new key value pair (grade,A+)

student["grade"]="A+";
console.log(student);

// add 20 marks of bonus

  student.total+=20;
  console.log(student);

// chk natch key is present or not add batch mearnstack_aug

if("batch" in student){
  console.log("true");
}
else{
  student["batch"]="mearnstack_aug"
}

// iteration

for(let key in student){
  console.log(key);
  console.log(student[key]);
}