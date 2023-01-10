import readline from 'readline-sync';

let currentTable = readline.questionInt("Whiche Table you want to generate ? = ");
let start = 1;
let end = readline.questionInt("Please define your end number = ");

while(start <= end) {
  const total = currentTable * start;
  const statement = `${currentTable} x ${start} = ${total}`
  console.log(statement);

  // console.log(`${currentTable} x ${start} = ${currentTable * start}`);
  start++; // start = start + 1;
}

