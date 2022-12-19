console.log("**** Resume Maker **** ");

const name = prompt('Name: ');
const label = prompt("Designation: ");
const email = prompt("Email: ");
const phone = prompt("Phone: ");
const url = prompt("Webiste: ");

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