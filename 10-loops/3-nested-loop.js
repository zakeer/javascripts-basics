// Nested

const tableNumber = 2;
let startNumber = 1;
const endNumber = 10;

while(startNumber <= endNumber) { // 1 <= 10 => true
  // statement
  console.log(`${tableNumber} x ${startNumber} = ${tableNumber * startNumber}`);
  startNumber++; // startNumber = startNumber + 1;
}
// after loop complete startNumber value is 11; // 11 <= 10 => false
console.log(`End of loop - startNumber value is ${startNumber}`);


// Task
/*
2 x 10 = 20
2 x 9 = 18
2 x 8 = 16
2 x 7 = 14
2 x 6 = 12
2 x 5 = 10
2 x 4 = 8
2 x 3 = 6
2 x 2 = 4
2 x 1 = 2
*/

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let startTable = 1;
let endTable = 10;

while(startTable <= endTable) {
  console.log(`Current table is ${startTable}`);
  let startNumber = 1;
  const endNumber = 10;
  while(startNumber <= endNumber) {
    console.log(`${startTable} x ${startNumber} = ${ startTable * startNumber }`);
    startNumber++;
  }
  console.log("------------------------------------")
  startTable++;
}