import fileSystem from 'fs';
import readline from 'readline-sync';
import chalk from "chalk";

function getFileData(filePath) {
  const fileBufferData = fileSystem.readFileSync(filePath);
  const convertToJSON = JSON.parse(fileBufferData);
  return convertToJSON;
}

// const categoriesBuffer = fileSystem.readFileSync("./data/categories.json");
// const categories = JSON.parse(categoriesBuffer);
// console.log(categories);

// const productsBuffer = fileSystem.readFileSync('./data/products.json');
// const products = JSON.parse(productsBuffer);
// console.log(products)

export const categories = getFileData('./data/categories.json');
export const products = getFileData("./data/products.json");


export function getCategory() {
  const displayCategories = categories.map((category) => {
    const firstLetter = category[0].toUpperCase();
    const remainingLetter = category.substr(1).toLowerCase();
    return firstLetter + remainingLetter;
  });


  const userSelectedOptionIndex = readline.keyInSelect(displayCategories);
  console.log(`User Selected Category Index = `, userSelectedOptionIndex);

  const userSelectedCategory = categories[userSelectedOptionIndex];
  console.log(chalk.green(`Selected Category: ${userSelectedCategory}`));

  return userSelectedCategory;
}


export function getProduct(category) {
  if (category) {
    const categoryProducts = products.filter(product => product.category === category);
    const productNames = categoryProducts.map(product => product.title);
    const selectedProductIndex = readline.keyInSelect(productNames);
    const selectedProduct = categoryProducts[selectedProductIndex];
    return selectedProduct;
  }
}

export function displayProductInfo(product) {
  if (product) {
    const title = product.title;
    const price = product.price;
    const category = product.category;

    console.log(chalk.bgWhite(" " + chalk.green(title) + " "))
    console.log(chalk.bgGreen(` Price: $${price} `) + chalk.bgRed(` Category: ${category.toUpperCase()} `))
  }
}


