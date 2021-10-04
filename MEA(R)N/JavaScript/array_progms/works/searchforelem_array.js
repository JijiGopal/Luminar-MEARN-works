var arr=[10,11,12,13,14,11] // search for 15 in this array (element not found OR elemen found) 
var search_elem=15;
var flag=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==search_elem){
        flag+=1;
        break;
    }
  
    else{
        flag=0;
    }
}
console.log(flag==0?"element not found":"element found");