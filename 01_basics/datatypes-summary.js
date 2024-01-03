// Primitive

/*
7 types : String, Number, Boolean, null, undefined, 
          Symbol, bigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 35465435464643213264n

// Reference(Non Primitive)
/*
    Array, Objects, Functions
*/

const heros = ["shaktiman","ironman","doga"]
let myObj={
    name:"divya",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);