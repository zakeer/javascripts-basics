const friends = [
  'Adil',     // 0
  'Sameer',   // 1
  'Syed',     // 2
  'Koti',     // 3
  'Apsar'     // 4
];

console.log( friends )
console.log( friends[0] )

const index = 3;
console.log( friends[index] ) // => friends[3]

console.log("Access array value by static index");
console.log( friends[0] );
console.log( friends[1] );
console.log( friends[2] );
console.log( friends[3] );
console.log( friends[4] );

console.log("------------------------------");
console.log("Access array value by using while loop");

let currentIndex = 0; // Loop Initial (starting) Point
const lastIndex = 4;
while( currentIndex <= lastIndex ) { // Loop condition
  console.log( friends[ currentIndex ] );
  currentIndex = currentIndex + 1; // Loop updating
}