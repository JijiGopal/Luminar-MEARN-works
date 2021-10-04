var products=[
    [100,"treat",30,10]
]

// find used to find the item . it will return only one item's details
   var find_item=products.find(item=>item[1]=="treat")
   console.log(find_item);

// some used to check if the item is in the array or not
  var is_available=products.some(item=>item[2]<30);
  console.log(is_available);

// forEach()

  products.map(item=>item[1]).forEach(names=>console.log(names))

  products.map(item=>item[2]>20).forEach(names=>console.log(names))