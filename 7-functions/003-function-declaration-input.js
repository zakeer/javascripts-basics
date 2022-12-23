// const readline = require('readline-sync');
import readline from 'readline-sync';

const firstValue = +readline.question(`Please enter the value of a = `); // string -> number
const secondValue = Number(readline.question(`Please enter the value of b = `)); // string -> number

// declaring a function
function maths(valueOne, valueTwo) {
  console.log(`Value of a is ${valueOne}`);
  console.log(`Value of b is ${valueTwo}`);

  const addition = valueOne + valueTwo;
  const subtraction = valueOne - valueTwo;
  const multiply = valueOne * valueTwo;
  const division = valueOne / valueTwo;
  const modulo = valueOne % valueTwo;

  console.log(`Addition of ${valueOne} and ${valueTwo} is ${addition}`);
  console.log(`Subtraction of ${valueOne} and ${valueTwo} is ${subtraction}`);
  console.log(`Multiply of ${valueOne} and ${valueTwo} is ${multiply}`);
  console.log(`Division of ${valueOne} and ${valueTwo} is ${division}`);
  console.log(`Modulo of ${valueOne} and ${valueTwo} is ${modulo}`);
}

maths(firstValue, secondValue);