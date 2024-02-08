// Que] write a js program to roll a dice and print a number between 1 - 6
const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1))+ min)