const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const USER_ENDPOINT = "/user"

const usersList = [
  {
    "name": "Koti",
    "email": "Koti@gmail.com",
    "contact": "5678906766",
    "id": 1
  },
  {
    "name": "Syed Zakeer Hussain",
    "email": "zakeer@zakeer.me",
    "contact": "98765410",
    "id": 2
  },
  {
    "name": "Jaleel",
    "email": "Jaleel@gmail.com",
    "contact": "6756786799",
    "id": 3
  }
];


// To get list of all users 
app.get(USER_ENDPOINT, (req, res) => {
  res.json({
    success: true,
    method: "get",
    users: usersList
  })
});

// To create a new user in application
app.post(USER_ENDPOINT, (req, res) => {
  const requestData = req.body;

  // const name = requestData.name;
  // const email = requestData.email;
  // const contact = requestData.contact;
  const { name, email, contact } = requestData;

  const errors = [];

  if (!email) {
    errors.push(`Email address is required`);
  }

  if (!name) {
    errors.push(`Name is required`);
  }

  if (!contact) {
    errors.push(`Contact number is required`);
  }

  if (errors.length > 0) {
    return res.json({
      status: false,
      errors: errors
    })
  }

  const newUser = {
    name: name,
    email: email,
    contact: contact,
    id: usersList.length + 1
  }

  usersList.push(newUser)

  res.json({
    status: true,
    methed: "POST",
    data: newUser
  })
});

// To update existing user based on user id
app.put(`${USER_ENDPOINT}/:id`, (req, res) => {
  const userID = req.params.id;
  res.json({ status: true, id: userID, method: "put" })
});

// To delete existing user based on user id 
app.delete(`${USER_ENDPOINT}/:id`, (req, res) => {
  const userID = req.params.id;

  // Check is user is available or not
  const user = usersList.find((user) => user.id === +userID);

  if (!user) {
    return res.json({
      status: false,
      message: `User not found with id ${userID}`
    })
  }

  // Array.splice(INDEX, LENGTH);
  const userIdx = usersList.findIndex( (user) => user.id === +userID )
  usersList.splice(userIdx, 1)

  res.json({
    status: true,
    id: userID,
    index: userIdx,
    method: "delete"
  })
});


app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
});