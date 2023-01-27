import fileSystem from 'fs';

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
const products = getFileData("./data/products.json");
