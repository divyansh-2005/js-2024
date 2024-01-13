const user = {
    username: "divya",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,SignedIn){
    this.username = username
    this.loginCount = loginCount
    this.SignedIn = SignedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("divya",12,true)
const userTwo = new User("divyansh",22,true)
console.log(userOne.constructor);
// console.log(userTwo);    