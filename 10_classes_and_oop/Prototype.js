// let myName = "divya     "
// let mychannel = "chai    "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.divya = function(){
    console.log(`divya is present in all objects`);
}

Array.prototype.heyDivya = function(){
    console.log(`Divya says hello`);
}

// heroPower.divya()
myHeros.divya()
myHeros.heyDivya()
// heroPower.heyDivya()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherusername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherusername.trueLength()
"divya".trueLength()
"icetea".trueLength()