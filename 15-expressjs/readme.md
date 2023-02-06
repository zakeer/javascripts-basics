# ExpressJS Application

Creating node app using [ExpressJS](https://expressjs.com/) framework

### Steps
1. Initialize Node Project
  `npm init` in project folder
2. Install Express Framework
  `npm install express`
3. Install Body Parser
  `npm install body-parser`
4. Apply body-parser middleware to express app for parsing json request body
  `app.use(bodyParser.json())`

### App Routes
- /
- /products
- /products/:product_id
- /categories