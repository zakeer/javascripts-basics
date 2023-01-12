// To define multiple values in memory we use array [] Square Brackets

/*
[
  value1, // string
  value2, // number
  value3, // boolean
  value4, // null
  value5, // []
  value6, // {},
  value7, // function() {}
  value8, // () => {}
]
*/
const ramesh = 'Ramesh V';
const students = [ 'Apsar', 'Adil', 'Sameer', ramesh ];

// Check how many values are represent in array ( .length property)
// Ways to access property on Object (here object is Array)
// . (dot) notation
// [] (Bracket) notation

printTotalStudents();

// Add new value to the end of Array ( .push() method )
students.push("Rajesh"); // We can push single value
students.push("Shaik", "Zahid"); // We can also push multiple values

printTotalStudents();
console.log(students);

// How to access a value in array
// . (dot) notation 
// (we can't use .dot notation on array because index values are in number)
// [] (Bracket) notation
console.log(students[0])
console.log(students[1]);

console.log(`Total length of students are ${students.length}`);


// Access the last value of array by using array length - 1
console.log( students[ students.length - 1 ] );
// console.log( students[ 7 - 1 ] );
// console.log( students[ 6 ] )

// Replace the value based on index 
students[3] = "Khaja Afrid";
console.log(students);


// Helper function to get the total students in array
function printTotalStudents() {
  console.log(`Total Number of students are ${ students.length }`)
}