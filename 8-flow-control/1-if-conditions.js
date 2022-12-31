// Ticket Bookings
import readline from 'readline-sync';
// const readline = require('readline-sync');

const CURRENT_AVAILABLE_TICKETS = 10;
console.log(`Current available tickets are = ${CURRENT_AVAILABLE_TICKETS}`);

const numberTicketsRequired = 15;

                  //           15           <=             10
const canBuyTickets = numberTicketsRequired <= CURRENT_AVAILABLE_TICKETS;

// 1. canBuyTickets -> true   -> You're tickets are confirmed
// 2. canBuyTickets -> false  -> tickets are not available

let message = '';

if( canBuyTickets ) {
  message = `You're tickets are confirmed`
} else {
  message = `Tickets are not available`
}

console.log(message)

