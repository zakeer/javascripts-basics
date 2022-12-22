const readline = require('readline-sync'); // es5


// "name": "Syed Zakeer",

/*
"label": "Programmer",
"image": "",
"email": "john@gmail.com",
"phone": "(912) 555-4321",
"url": "https://johndoe.com",
*/
console.log("**** Resume Maker **** ");

const name = readline.question('Name: ');
const label = readline.question("Designation: ");
const email = readline.question("Email: ");
const phone = readline.question("Phone: ");
const url = readline.question("Webiste: ");

const resume = {
  basics: {
    name: name,
    label: label,
    email: email,
    phone: phone,
    url: url
  }
};

console.log("User Details")
console.log(resume)