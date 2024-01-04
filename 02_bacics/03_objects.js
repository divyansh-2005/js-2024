// singletion
//Object.create =>construction method

//Objects literals
const mySym = Symbol("Key1")

const JsUser = {
    name: "Divya",
    "full name":"Divya kumbhat",
    [mySym]: "myKey1",
    age: 18,
    location: "Nagpur",
    email: "divya2gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "divya@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "divya@chatgbt.com"
console.log(JsUser.email);

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());