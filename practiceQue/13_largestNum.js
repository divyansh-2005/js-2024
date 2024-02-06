// Qs5.Findthelargestnumberinanarraywithonlypositivenumbers.

let arr = [1,2,3,4,5,13,6,7,8,9]
let largest = 0

for(let i=0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log(largest);
