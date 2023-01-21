const students = [];

// Add value to array (below code will add value as a last item in array)
const value_return_from_push = students.push('Shaik');
console.log(value_return_from_push);

students[students.length] = 'Zahid';
console.log(students);

// Add value at the begining of array 
const count = students.unshift('Syed');
console.log(students);
console.log(count);

const old_students = ['Apsar', 'Rajesh', 'Ramesh'];

// Merge multiple array with .concat() method
const all_students = students.concat(old_students);
console.log(students);
console.log(old_students);
console.log(all_students);

// Convert Array values to String with separator by using .join()
const students_joined = all_students.join();
console.log(students_joined);
console.log(typeof students_joined);

const joined_with_slash = all_students.join(" && ")
console.log(joined_with_slash);

//      0       1        2        3        4         5
// [ 'Syed', 'Shaik', 'Zahid', 'Apsar', 'Rajesh', 'Ramesh' ]
const first_two_students = all_students.slice(0, 2); // ['Syed', 'Shaik']
const java_students = all_students.slice(2, 5); // ['Zahid', 'Apsar', 'Rajesh']
const last_three_students = all_students.slice(3); // ['Apsar', 'Rajesh', 'Ramesh']

const users = [
  "Kaden Kuvalis",
  "Raphaelle Abernathy",
  "Elfrieda VonRueden",
  "Keon Pacocha DDS",
  "Aryanna Thiel",
  "Sonya Lind",
  "Armand Rodriguez",
  "Shaun Keeling",
  "Margarita Rodriguez Jr.",
  "Jasper Dach",
  "Karina Doyle",
  "Dr. Christophe Harvey",
  "Vernon Spinka",
  "Zakary Lueilwitz PhD",
  "Deion Hills",
  "Thomas White",
  "Lauriane Turner",
  "Mabelle Volkman",
  "Domingo Rohan",
  "Antonina Rolfson",
  "Darrin Zboncak",
  "Joyce Wunsch III",
  "Krystel Hermiston",
  "Mrs. Annabelle Prohaska",
  "Breanna Tremblay",
  "Peter Lakin",
  "Gregorio Wiegand",
  "Emmalee Pacocha",
  "Mrs. Eldon Klocko",
  "Herman Toy",
  "Garland Mraz",
  "Miss Opal Runolfsdottir",
  "Martine Olson",
  "Gladyce Kilback V",
  "Rae Bechtelar",
  "Jacky Hammes",
  "Neha Bergstrom",
  "Connie Hessel",
  "Krystel Ankunding",
  "Ruth Haag",
  "Hayden Kuhlman PhD",
  "Guillermo Koelpin",
  "Abigayle Casper",
  "Karlie Borer",
  "Nils Williamson",
  "Morris Renner",
  "Buford Tillman PhD",
  "Elouise Waters MD",
  "Sofia Larson",
  "Alexandre Gleason"
];

const totalUsers = users.length;
console.log(`Total Member of users ${totalUsers}`);

const lastTenUsers = users.slice(-10);
console.log(lastTenUsers)

const last_ten_users = users.slice(users.length - 10)
console.log(last_ten_users);

console.log(all_students);

//      0       1        2        3        4         5
// [ 'Syed', 'Shaik', 'Zahid', 'Apsar', 'Rajesh', 'Ramesh' ]
// Find 'Apsar' values index in array 
const indexValueOfApsar = all_students.indexOf('Apsar'); // 3
console.log(indexValueOfApsar);

console.log(all_students.indexOf('apsar')); // -1 because apsar and Apsar both are different

console.log(all_students.indexOf('ZAKEER'));


//                0    1    2    3    4    5    6    7    8
const letters = ['a', 'b', 'c', 'z', 'y', 'x', 'a', 'z', 'm'];
console.log( letters.indexOf('a') ); // 0
console.log( letters.indexOf('z') ); // 3
console.log( letters.lastIndexOf('a') ); // 6
console.log( letters.lastIndexOf('c') ); // 2
console.log( letters.lastIndexOf('C') ); // -1

// Remove values from array (THese methods will modify original array);
// .shift()   // return removed Value
// .pop()     // return removed Value
// .splice()  // return removed array of values
console.log(all_students);
const first_student = all_students.shift();

console.log(first_student);
console.log(all_students)

const last_student = all_students.pop();
console.log(last_student);
console.log(all_students)

