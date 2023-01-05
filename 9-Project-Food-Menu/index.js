import readline from 'readline-sync';
import chalk from 'chalk';

// import {} from './filename'
import { showMenu } from './menu.js';
import { showMenuItems } from './menu-items.js'
import { showError } from './showError.js';

console.log(chalk.bgGreen(`FOOD MENU CATEGORY`));
console.log("Please select a category");

const category = showMenu();
console.log(`Selected Category ${category}`);
const menuItem = showMenuItems(category);
console.log(`Selected Menu Item ${menuItem}`);

if(menuItem) {
  console.log(`Thanks for Buying ${menuItem}`)
} else {
  showError();
}






