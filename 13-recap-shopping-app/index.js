import chalk from "chalk";
import { getCategory, displayProductInfo, getProduct } from "./utils.js"

console.log(chalk.bgGreen("Welcome to our shopping app"));
const selectedCategory = getCategory();
if (selectedCategory) {
  const product = getProduct(selectedCategory);
  displayProductInfo(product);
}