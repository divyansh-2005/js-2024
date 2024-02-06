// Qs2.Write a JS program to find the no of digits in a number.
// Example: if number=287152,count=6

//sol 1]
// const num = 284645
// const str = String(num)
//     // console.log(typeof(str));
//     // console.log(num.length);

// console.log(`Length of num is: ${str.length}`);


//sol 2]

let number = 654654

let count = 0

let copy = number

while(copy > 0){
    count++
    copy = Math.floor(copy/10)
}

console.log(count);

