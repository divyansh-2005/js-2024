// create a system to calculate popcorn price based on the size customer asked for
const size = 'L'
let price

if(size == 'XL'){
  price = 250
}
else if(size == 'L'){
  price = 200
}
else if(size == 'M'){
  price = 100
}
else if(size == 'S'){
  price = 50
}
else{
  console.log("Enter a valid size");
}

console.log(price);