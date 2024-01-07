// * reduce function *
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curVal){
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal
// },0 )

const myTotal = myNums.reduce( (acc,cur)=> acc+cur,0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "moblie dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);