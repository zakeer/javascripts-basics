// .methodName( ?input )

const students = []; // Created an empty array

// Add value to array by using .push( NEW_VALUE ) method
students.push('Syed');

// Add Value using length property ARRAY[ ARRAY.length ] = NEW_VALUE
students[students.length] = 'Zakeer';

console.log(students);

function havingReturnValue() {
  return 100 + 200;
}

function fnWithoutReturn() {
  const total = 100 + 200;
}

const valueOne = havingReturnValue(); // it will return value
const valueTwo = fnWithoutReturn(); // it will return undefined because no return statement

console.log(`Value of valueOne is ${valueOne}`);
console.log(`Value of valueTwo is ${valueTwo}`);


[].forEach;
/*
(method) Array<never>.forEach(
  callbackfn: (value: never, index: number, array: never[]) => void, 
  thisArg?: any
): void

Performs the specified action for each element in an array.
*/

[].map;
/*
(method) Array<never>.map<U>(
  callbackfn: (value: never, index: number, array: never[]) => U, 
  thisArg?: any
): U[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

const welcome_students_using_forEach = students.forEach((student) => {
  const message = `Welcome ${student}`;
  console.log(message);
  return message;
});
console.log(`Values using forEach`, welcome_students_using_forEach);

const welcome_students_using_map = students.map((student) => {
  const message = `Welcome ${student}`;
  console.log(message);
  return message;
});
console.log(`Values using map`, welcome_students_using_map);

const shoppingPrices = [56, 450, 329, 458]; // Apply Discount of 10%;
const discountPrices = [];
const DISCOUNT_PERCENTAGE = 10;

function applyDiscount(amount, discountPercentage = 10) {
  // Discount Formule: (VALUE * DISCOUNT) / 100;
  const discount = (amount * discountPercentage) / 100;
  return amount - discount;
  // const discountAmount = amount - discount;
  // return discountAmount;
}

for (let i = 0; i < shoppingPrices.length; i++) {
  const value = shoppingPrices[i];
  const discountAmount = applyDiscount(value, DISCOUNT_PERCENTAGE);
  discountPrices.push(discountAmount)
}

const discount_values_using_map = shoppingPrices.map((amount) => {
  const discountAmount = applyDiscount(amount, DISCOUNT_PERCENTAGE);
  return discountAmount;
});

/*
const map_using_single_statement = shoppingPrices.map( amount => {
  return amount - 10;
} );
*/

const map_using_single_statement = shoppingPrices.map(amount => applyDiscount(amount));

console.log(shoppingPrices);
console.log(discountPrices);
console.log(discount_values_using_map);
console.log(map_using_single_statement);

/*
[].push(123); // [123]
[100, 200].push(300); // [100, 200, 300];

[].forEach( () => {} );
[].forEach( function() {} );

['Syed', 'Zakeer', 'Hussain'].forEach( (value) => { console.log(`Welcome {value}`) } );

// 'Syed' => ('Syed') => { console.log(`Welcome Syed') }
// 'Zakeer' => ('Zakeer') => { console.log(`Welcome Zakeer`) }
// 'Hussain'


['A', 'B', 'C'].map(char => char.toLowerCase());

// A => A => A.toLowerCase() ===> a
// B => B => B.toLowerCase() ===> b
// C => C => C.toLowerCase() ===> c
*/

