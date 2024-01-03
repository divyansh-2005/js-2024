const name = "divya"
const repoCount = 5
//console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('divya')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-3,4)
console.log(anotherString);

const str1 = "  divya   "
console.log(str1);
console.log(str1.trim());

const url = "https://divya.com/divya%20kumbhat"
console.log(url.replace('%20','-'))

console.log(url.includes('divy'));

const str = new String("divya-nsh-com")
console.log(str.split(`-`));