const schoolFriends = [
  'Shaik',
  'Pavan',
  "Khaja"
];

const collegeFriends = [
  'Harish',
  'Mani',
  'Harsha',
  'Chandu'
]

// Merge / Combine multiple array into single array 

// Using .concat method
const friends = schoolFriends.concat(collegeFriends);
console.log(friends);

// using es6 spread operator (...) (es6 feature)
const friendsList = [...schoolFriends, ...collegeFriends];
console.log(friendsList);

// Generic/Lecacy tech
const combineFriends = [];
for (let i = 0; i < schoolFriends.length; i++) {
  const friend = schoolFriends[i];
  combineFriends.push(friend);
}

for (let i = 0; i < collegeFriends.length; i++) {
  combineFriends.push(collegeFriends[i]);
}

console.log(combineFriends)