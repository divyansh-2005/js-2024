//** for in loop for Objects

const myObject = {
    js: "javascript",
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "united States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const [key, value] of map) {
//     console.log(key);
// }