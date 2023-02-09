# ExpressJS Rest APIs

### Introduction to REST APIs
REST (Respresentation State Transfer) APIs are a standart for building web APIs.
REST APIs use HTTP METHODS
- GET
- POST
- PUT
- DELETE

to interact with resources respresented by URIs (Uniform Resource Indentifiers).

REST APIs can return data in different formats
- JSON
- XML
- HTML
- ByteArray

But JSON (JavaScript Object Notation) is the most common format.

### Instruction
1. Initialize Project for Node Environment 
```
npm init
```

2. Install Express package
```
npm install express
```

3. To Handle JSON Request/Response install body-parse library
```
npm install body-parser
```
_In Express.js, you can handle JSON payload in you API by adding the `body-parser` middleware to your application. **The `body-parser` middleware allows you to parse JSON data in the request body**_

4. Create Express Application
```javascript
const express = require("express");
const app = express();
```

5. Apply `body-parser` middleware to express app
```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.json())
```

6. Create/Listen Server on specific PORT
```javascript
const SERVER_PORT = 3000;
const onServerStart = function() {
  console.log(`Server running on http://localhost:${SERVER_PORT})`);
};

app.listen(SERVER_PORT, onServerStart)
```

### Routing in ExpressJS
Route is a specific endpoint in your application that defines the behavior for a particular URL. You can define routes using the `app.get()` method, which is used to handle HTTP GET requests
```javascript
app.get('/', (request, response) => {
  response.send("Hello, World!")
});
```

- **GET** Request
```javascript
const USER_ENDPOINT = "/users";
const apiHandler = (req, res) => {
  res.json({success: true})
}

app.get(USER_ENDPOINT, apiHandler)
```

- **POST** Request
```javascript
const USER_ENDPOINT = "/users";
app.post(USER_ENDPOINT, function(request, response) {

});
```

- **PUT** Request
```javascript
const USER_ENDPOINT = "/users/:id"; // id is request param
app.put(USER_ENDPOINT, function(request, response) {
  const userID = request.params.id;
});
```

- **DELETE** Request
```javascript
const USER_ENDPOINT = "/users/:id"; // id is request param
app.put(USER_ENDPOINT, function(request, response) {
  const userID = request.params.id;
});
```

### CRUD Operations on Users 

1. **C**reate (Create a new user through **POST** API)
2. **R**ead (Get user details through **GET** API)
3. **U**pdate (Update user details through **PUT** API)
4. **D**elete (Remove user from the system through **DELETE** API)

![](https://miro.medium.com/max/1400/1*2eBdh0vLZjUyCDF6x1EqvQ.png)

 