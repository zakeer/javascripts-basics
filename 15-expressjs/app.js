// Expressjs is framework (external library)
// We need to download in from NPM registry

// 1. npm init
// 2. npm install express

const fs = require('fs');

const express = require("express"); //
const app = express();

function getFileData(path) {
  const data = fs.readFileSync(path);
  const json = JSON.parse(data);
  return json;
}

// const productsData = fs.readFileSync("../14-node-server/data/products.json"); // Buffer
// const products = JSON.parse(productsData);

const DATA_FOLDER = "../14-node-server/data"
const products = getFileData(`${DATA_FOLDER}/products.json`);
const categories = getFileData(`${DATA_FOLDER}/categories.json`);

const handleCategories = function(request, response) {
  response.json(categories)
};


app.get("/", function(req, res) {
  res.send("Express app is runing...")
});

app.get("/products", (request, response) => {
  response.json(products);
});

app.get("/categories", handleCategories);

app.get("/products/:productID", (req, res) => {
  const productId = req.params.productID;
  const product = products.find(p => p.id === parseInt(productId));

  if(!product) {
    res.json({
      error: true,
      message: `NO PRODUCT FOUND with ID ${productId}`
    })
  } else {
    res.json(product);
  }
})

app.listen(3000, () => {
  console.log(`Server listening on port http://localhost:3000`)
});

