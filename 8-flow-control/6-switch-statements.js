import readline from 'readline-sync';

const TRAFFIC_LIGHTS = [
  'Red',    // 0
  'Green',  // 1
  'Yellow'  // 2
]

const userColorIndex = readline.keyInSelect(TRAFFIC_LIGHTS);
/*
[1] Red     0
[2] Green   1
[3] Yellow  2
[0] CANCEL  -1
*/
const userSelectedLight = TRAFFIC_LIGHTS[userColorIndex];
console.log(`User Selected Traffic Light = ${userSelectedLight}`);

const RED_INDEX = 0;
const GREEN_INDEX = 1;
const YELLOW_INDEX = 2;

switch(userColorIndex) {

  case RED_INDEX:
    console.log("STOP...");
    break;
  
  case GREEN_INDEX:
    console.log("Go....");
    break;
  
  case YELLOW_INDEX:
    console.log("Move slow...");
    break;
  
  default:
    console.log("UNKNOWN LIGHT....")
}

/**

switch(value) {

  case 'ABC':
    console.log('Value is ABC');
    break;
  
  case 'XYZ':
    console.log('Value is XYZ');
    break;
  
  default:
    console.log('Unidentified value....')

}

if(value === 'ABC') {
  console.log('Value is ABC');
} else if (value === 'XYZ') {
  console.log('Value is XYZ');
} else {
  console.log('Unidentified value....')
}

*/



/*
if (colorIndex === GREEN) {
  console.log(chalk.bgGreen('GO'))
} else if (colorIndex === RED) {
  console.log(chalk.bgRed('STOP'))
} else if (colorIndex === YELLOW) {
  console.log(chalk.bgYellowBright('Move Slow..'))
}
*/