// [].push(VALUE);
// [].splice(INDEX, END_INDEX);


// [].forEach;  => undefined
// [].map;      => SAME LENGTH OF ARRAY
// [].filter;   => LESS OR EQUAL LENGTH OF ARRAT
// [].reduce;   => SINGLE VALUE
// [].some;
// [].find;

const marks = [
  45,
  66,
  37,
  97,
  56,
  45,
  79
];

function doubleMarks(marksValue) {
  const value = marksValue * 2;
  console.log(value);
  return value
}

// marks.forEach((value, index, originalArray) => {})
// marks.forEach( function(value, index) {} )
const forEach_values = marks.forEach(doubleMarks);
console.log("ForEach values", forEach_values);

const map_values = marks.map(doubleMarks);
console.log(map_values);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const doubleNumbers = numbers.map(value => value * 2);

const even_numbers = numbers.filter( value => value % 2 === 0 );
console.log(even_numbers);

const old_numbers = numbers.filter( value => value % 2 !== 0 );
console.log(old_numbers);

const users = [ 'Syed', 'Shaik', 'Zahid', 'Apsar', 'Rajesh', 'Ramesh' ];

const a_letter_users = users.filter( value => value[0] === 'A' );
console.log(a_letter_users)

const r_letter_users = users.filter( value => value[0] === 'R' );
console.log(r_letter_users)

// Reduce 
