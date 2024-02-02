// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0,-2] and n=3
//     Print, [7, 9, 0]

const arr1 = [7,9,0,-2]
let n1 = 3

// Sol 1]
console.log('sol 1');
for (let i = 0; i < n1; i++) {
    console.log(arr1[i]);
}

// sol 2]
console.log('sol 2');
let newarr = arr1.splice(0,n1)
console.log(arr1); // splice changes the original array
console.log(newarr);


// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0,-2] and n=3
//     Print, [9, 0,-2]

const arr2 = [7,9,0,-2]
let n = 3

// sol 1]
console.log('sol 1');
for (let i = arr2.length - n; i <= n; i++) {
    console.log(arr2[i]);   
}

// sol 2]
console.log('sol 2');
let nd = arr2.splice(arr2.length - n,n+1)
console.log(nd);

