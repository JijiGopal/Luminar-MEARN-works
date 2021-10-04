var weather_data=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:31},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
   
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]


var forcast={} // {"district_name":highest_temp}

for(let data of weather_data){

    let dis_name=data.district;
    let cur_tem=data.temp;
    if(dis_name in forcast){
       let old_temp=forcast[dis_name]
       if(cur_tem>old_temp){
           forcast[dis_name]=cur_tem
       }
    }
    else{
        forcast[dis_name]=cur_tem
    }
}
console.log(forcast);

// sort forcast
 console.log( Object.entries(forcast).sort((temp1,temp2)=>temp1[1]-temp2[1]));






