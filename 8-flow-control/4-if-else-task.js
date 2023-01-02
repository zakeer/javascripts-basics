// Traffic Lights
/**
1. Green    -> (Vehicle Can move / Go)
2. Red      -> (Vehicle should be stop)
3. Yellow   -> (vehicles can move but need go slow)
 */

import readline from 'readline-sync';
import chalk from 'chalk';

const GREEN_LIGHT = 'green';
const RED_LIGHT = 'red';
const YELLOW_RIGHT = 'yellow'

let currentLight = readline.question('Current Light = ');
currentLight = currentLight.toLowerCase();
console.log(chalk.bgCyan(`Current Light value is = ${currentLight}`));

if (currentLight === GREEN_LIGHT) {
  console.log(chalk.bgGreen('GO.....'));
} else if (currentLight === RED_LIGHT) {
  console.log(chalk.bgRed('STOP.....'));
} else if (currentLight === YELLOW_RIGHT) {
  console.log(chalk.bgYellow("GO SLOW....."));
} else {
  console.log(`Light values should be Red, Green, Yellow`);
}

// Yellow => Yellow, yellow, YELLOW, YellOW, ....