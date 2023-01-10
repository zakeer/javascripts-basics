const friends = [
  'Adil',     // 0
  'Sameer',   // 1
  'Syed',     // 2
  'Koti',     // 3
  'Apsar',    // 4
  'Rajesh',  // 5
  'Ramesh',  // 6
  'Khaja'    // 7
];
const totalFriend = friends.length; // 8
console.log(`Total friends length is ${friends.length}`)

  //  initial;      condition;    updation     
for(let index = 0; index < totalFriend; index = index + 1) {
  console.log(`Current friend is ${ friends[index]} is at index of ${index}`)
}

// Generate Table 1 - 10
/*
  5 x 1 = 5
  5 x 2 = 10
  5 x 3 = 15
  5 x 4 = 20
  ...
  ...
  ..
  ..
  ..
  ..
  5 x 10 = 50
*/