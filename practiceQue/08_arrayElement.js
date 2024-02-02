// Qs6. Write a JavaScript program to check if an element exists in an array or not.
const arr = [1,2,3,4,5,6,7]
check = 3

// for (let i = 0; i < arr.length; i++) {
//     if(i == 3)
//         console.log("exists");
//     else
//         console.log("not exists");
// }

if(arr.includes(check))
    console.log("YES");
else
    console.log("NO");