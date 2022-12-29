// Creating simple Javascript Object

const user = {
  firstname: 'Syed',
  lastname: 'Zakeer',
  work: 'UI Dev',
  city: 'Guntur',
  wfh: true,
  skills: ['html', 'css', 'js'],
  company: {
    name: 'SAP',
    location: 'Bangalore'
  },

  details: function() {
    console.log(`User Details: Syed Zakeer`);
  }
}

console.log(user);
console.log(`Data type of variable user is ${typeof user}`);

// How to access object properties (keys)
// 1. DOT Notation `.`
// 2. Brackets Notation `[]`

// DOT Notation `.` object.propertyName
console.log(`User City info: ${user.city}`);

// Brackets Notation `[]` -> object['propertyName']
console.log(`User city info via bracket notation user['city'] = ${user['city']}`);

// Accessing nested object properties -> `.` or `[]`
const companyLocation = user.company.location;
console.log(`companyLocation by dot notation = ${companyLocation}`);

const companyLoc = user['company']['location'];
console.log(`Company Location by bracket notation = ${companyLoc}`)

const skills = user.skills;
console.log(skills);

user.details()




