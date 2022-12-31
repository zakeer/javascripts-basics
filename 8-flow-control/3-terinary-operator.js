/*
Here is normal if/else flow
  if( condition ) {
    
  } else {

  }
*/

import readline from 'readline-sync';
const ticketsAvailable = 20;

let message = '';

const userInput = readline.question('No of required tickets? ');
/*
if (userInput <= ticketsAvailable) {
  message = 'Tickets Booked'
} else {
  message = 'Tickets not booked'
}
*/

// condition ? trueBlock : falseBlock
message = userInput <= ticketsAvailable ? 'Tickets are booked' : 'Tickets are not Booked';

const condition = userInput <= ticketsAvailable;
const trueMessage = 'Tickets are booked';
const falseMessage = 'Tickets are not Booked';

const anotherMessage = condition ? trueMessage : falseMessage;

console.log(`Message value = ${message}`);
console.log(`Another Value = ${anotherMessage}`)