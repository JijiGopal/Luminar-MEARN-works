//    0   1   2   3   4   5   6
//  0             *
//  
//  1         *        *
//     
//  2     *        *        *
//
//  3 *        *        *        *
// the outermost layer will work  4 times

// 0,1,2,3
for(let row=0;row<4;row++){
   let str="";
   for(let space=0;space<(4-row-1);space++){//str=0
        str+=" ";
   }
   for(let col=0;col<(row+1);col++){
       str+="* ";
   }
   console.log(str);
}

