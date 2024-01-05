const user = {
    username: "divya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "divya"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "divya"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "divya"
    console.log(this);
}
// chai()

//****arrow function****

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) =>  num1+num2

// const addTwo = (num1,num2) =>  (num1+num2)

const addTwo = (num1,num2) =>  ({username:"divya"})


console.log(addTwo(3,4));


// const myArr = [1,2,3,4,5]
// myArr.forEach()