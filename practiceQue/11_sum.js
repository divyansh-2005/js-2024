// Qs3.WriteaJSprogramtofindthesumofdigitsinanumber.
//  Example: ifnumber=287152,sum=25

let num = 287152
let sum = 0
let copy = num

while(copy > 0){
    digit = copy % 10
    sum += digit    
    console.log(digit);
    copy = Math.floor(copy/10)
}
console.log(`sum = ${sum}`);
