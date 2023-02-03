const http = require('http');
const fs = require('fs');

const categories = fs.readFileSync('data/categories.json'); // Buffer Data
const products = fs.readFileSync('data/products.json'); // Buffer Data



// /categories  => CATEGORIES_DATA
// /products    => PRODUCTS_DATA

function serverListener(request, response) {
  console.log(`Server Requested URL: `, request.url);

  const REQUESTED_URL = request.url;

  if (REQUESTED_URL === "/products") {
    response.end(products);
  } else if (REQUESTED_URL === "/categories") {
    response.end(categories);
  } else {
    if (REQUESTED_URL.includes("/products/")) {
      // /products/5 => ["", "product", "5"]
      const paths = REQUESTED_URL.split("/"); // ["", "product", "5"]
      const productId = paths[paths.length - 1];
      console.log("Product ID:", productId);
      const productsList = JSON.parse(products);
      // Here productId is string
      // product.id == productId

      // String to Number
      // 1. Number.parseInt("3"); // 3
      // 2. parseInt("3"); // 3
      // 3. +"3"; // 3

      // JSON.parse     => string -> object/array
      // JSON.stringify => object/array -> string  

      const product = productsList.find(product => product.id === productId);

      if(product) {
        response.end(JSON.stringify(product))
      } else {
        response.end("No Product found...")
      }
      
    } else {
      response.writeHead(404);
      response.end(`Resource not found. Please try with /categories or /products or /products/{PRODUCT_ID}`)
    }
  }

};


const server = http.createServer(serverListener);
const PORT = 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Project Server running on http://${HOST}:${PORT}`);
});


// To Stop server use CTRL + C
