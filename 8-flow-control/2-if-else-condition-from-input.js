import readline from 'readline-sync';
import chalk from 'chalk';

const AVAILABLE_TICKETS = 10;
const userRequiredTickets = readline.question('How many tickets are required? '); // 18

if(userRequiredTickets <= AVAILABLE_TICKETS) {
  console.log( chalk.bgGreen(`Tickets are confirmed`) )
} else {
  console.log( chalk.bgRed(`Tickets are not available...`) )
}