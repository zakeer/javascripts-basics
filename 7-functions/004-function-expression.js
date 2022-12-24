// Expression produce a value
// Statement don't produce a value

// Expression
56 + 90; // here 56 and 90 are two values which will converted into a single value
89 * 100 > 78 + 99;

// so expression will generate a value, which can be assign to variable
let output = 89 * 100 > 78 + 99; // this is retreated has a statement

console.log("Hey! How are you");

// function declaration
function doWelcome(username) {
  console.log(`Welcome ${ username }`);
}

doWelcome('Adil Khan');

let add = function(xValue, yValue){
  return xValue + yValue;
}

let additionOfNumbers = add(78, 67);
console.log( additionOfNumbers );

