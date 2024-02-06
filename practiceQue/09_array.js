// Qs1.WriteaJSprogramtodeletealloccurrencesofelement ‘num’ inagivenarray.
// Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
// Resultshouldbearr=[1,3,4,5,6,3]

const arr=[1,2,3,4,5,6,2,3]
const num=2

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element == num){
        console.log(`${num} found at index:${i}`);
        arr.splice(i,1)
    }    
}
console.log(arr);
