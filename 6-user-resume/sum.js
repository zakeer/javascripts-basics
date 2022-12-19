const readline = require('readline-sync');

console.log("Sum of Two Numbers");

// COnvert value to number
// 1. Number(value) 
// 2. +value

const a = +readline.question('Please enter the value of a: ');
const b = Number( readline.question('Please enter the value of b: ') );
console.log(`Value of ${a} is ${typeof a}`);
console.log(`Value of ${b} is ${typeof b}`);
const sum = a+b;

console.log(`SUM OF ${a} plus ${b} = ${sum}`);