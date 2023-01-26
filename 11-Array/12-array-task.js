var friends = ['syed', 'ZaKeEr', 'hUSSaiN'];
// ['Syed', 'Zakeer', 'Hussain'];

var friendsName = friends.map( friend => friend.toLowerCase() );


var capitalize = friendsName.map(friend => {
  const firstLetter = friend[0].toUpperCase();
  const remainingLetters = friend.substring(1);
  return firstLetter + remainingLetters
});

console.log(friends);
console.log(friendsName);
console.log(capitalize);

// ['syed', 'zakeer', 'hussain'];