var product={
    p_code:100,
    name:"product1",
    price:250,
    aval_qty:50
}

// print product name
console.log(product.name);

// update stock as current stock +30
product.aval_qty+=30;
console.log(product);


// check for discount key is present
console.log("discount" in product);

// add discount:10%
product ["discount"]="10%";
console.log(product);

// check for batch_code is present

if("batch_code" in product){
       console.log("true");
}
else{
    product["batch_code"]="est_2k1_09";
}

