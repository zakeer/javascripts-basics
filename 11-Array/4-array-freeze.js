var abc = 123;
let xyz = 456;
const dob = 29012022;

abc = abc * 2;
xyz = 999;
// dob = 20221229; // Here we can't change value of const variable

console.log(`Value of abc = ${abc}`);
console.log(xyz);
console.log(dob);


const list = [
  46,
  78,
  65,
  89,
  24
];

console.log(list);
/**
we can't able change the direct value of const variable
list = [
  46,
  78,
  65,
  89,
  24,
  90
]
 */

list[2] = 99; // Here we are not replace the variable value

console.log(list);

// Now lets talk about freeze (means on one able to modify the value of object/array)


const marks = [100, 200, 300];
Object.freeze(marks);

// marks[ marks.length - 1 ] = 400;

console.log(`Marks = `, marks);
// marks[0] = 999; // ERROR: Cannot assign to read only property '0' of object '[object Array]'


const values = Object.freeze([
  100,
  200,
  'Syed',
  true,
  [99, 999, 9999],
  { a: 1, b: 2 }
]);
console.log(values);
// values[2] = "Hussain";


console.log(values[4].length); // 3
console.log(values[values.length - 1].length); // undefined

values[4][1] = 1000
console.log(values);

values[5].a = 333;
console.log(values)






