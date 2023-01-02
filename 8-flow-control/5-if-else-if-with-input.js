// We should restrict user to enter only Green, Red, Yellow;
import chalk from 'chalk';
import readline from 'readline-sync';

const GREEN = 0;
const RED = 1;
const YELLOW = 2;

// const userInput = readline.questionInt(`Select any one option for current light
//   1. Green
//   2. Red
//   3. Yellow
// `);
// Array Index  = [    0       1       2     ]
const COLOR_OPTIONS = ['Green', 'Red', 'Yellow'];

console.log(`Color value Index: 0 => ${COLOR_OPTIONS[0]}`)
console.log(`Color value Index: 1 => ${COLOR_OPTIONS[1]}`)
console.log(`Color value Index: 2 => ${COLOR_OPTIONS[2]}`)
console.log(`Color value Index: -1 => ${COLOR_OPTIONS[-1]}`)

const colorIndex = readline.keyInSelect(COLOR_OPTIONS);
console.log(`User Input value ${colorIndex} = ${COLOR_OPTIONS[colorIndex]}`);

if (colorIndex === GREEN) {
  console.log(chalk.bgGreen('GO'))
} else if (colorIndex === RED) {
  console.log(chalk.bgRed('STOP'))
} else if (colorIndex === YELLOW) {
  console.log(chalk.bgYellowBright('Move Slow..'))
}

 
