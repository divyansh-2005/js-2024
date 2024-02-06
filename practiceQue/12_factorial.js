// Qs4.Print thefactorialofanumbern.
// [Factorialofanumbernistheproductofallpositiveintegerslessthanorequal toa
// givenpositiveintegeranddenotedbythat integer. ]
// Example:
// 7!(factorialof7)=1x2x3x4x5x6x7=5040
// 5!(factorialof5)=1x2x3x4x5=120
// 3!(factorialof3)=1x2x3=6
// 0! Isalways1

let n = 5
let fact = 1

for(let i=1; i<=n; i++){
    fact *= i
}
console.log(`factorial of ${n} is ${fact}`);

