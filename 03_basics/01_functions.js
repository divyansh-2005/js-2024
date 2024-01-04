function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("V");
    console.log("Y");
    console.log("A");
}

// sayMyName()

// function add(num1,num2){
//     console.log(num1 + num2);
// }

function add(num1,num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}

const result = add(3,4)
// console.log(result);

function login(username){
    if(username === undefined){//if(!undefined)
        console.log("please enter a username");
        return
    }
    return `${username} just loggged in`
}

// console.log(login());
// console.log(login("divya"));

function calculateCartPrice(val1,val2,...num1){// ... =>rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "divya",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price: 399
})

const myarr = [200,100,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myarr));
console.log(returnSecondValue([200,400,500,1000]));