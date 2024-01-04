const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allHeros = [...marvel_heros,...dc_heros] //spread method
console.log(allHeros);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const simple_arr1 = arr1.flat(Infinity)
console.log(simple_arr1);

console.log(Array.isArray("Divya"))
console.log(Array.from("Divyansh"));
console.log(Array.from({name:"Divyansh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));