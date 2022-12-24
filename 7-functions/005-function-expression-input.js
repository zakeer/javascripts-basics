// Expression function is a value or expression by assigning an anonymous function to a variable or parameter.

import readline from 'readline-sync';
import chalk from 'chalk';
                                           
const calculateBill = function(mealAmount, taxRate, tip) {
  const total = Number(mealAmount) + Number(taxRate) + Number(tip);
  return total;
}

const customerMealAmount = readline.question("Please enter meal amount: ");
const taxRate = readline.question("What is the Tax Rate?: ");
const tipValue = readline.question("Any tip amount ?: ");

const totalBill = calculateBill(customerMealAmount, taxRate, tipValue);

console.log( chalk.bgRed("Total Bill Amount:") + chalk.bgGreen(totalBill) );