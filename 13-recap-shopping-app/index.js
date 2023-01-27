import chalk from "chalk";
import readline from 'readline-sync';
import { categories } from "./utils.js"

console.log(chalk.bgGreen("Welcome to our shopping app"));

readline.keyInSelect(categories);

