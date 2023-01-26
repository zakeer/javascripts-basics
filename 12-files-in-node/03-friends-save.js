// Files (friends.json, friends.txt)
// Database (Sqlite / MySql)

import readline from 'readline-sync';
import chalk from 'chalk';

// package (fs) => filesystem
import fs from 'fs';

const FRIENDS_FILE_PATH = "./data/friends.json";

const fileData = fs.readFileSync(FRIENDS_FILE_PATH); // readFileSync will return data as buffer
console.log("FILE DATA CONTENT AS BUFFER DATA............")
console.log(fileData);
console.log("Converting Buffer data to JSON by using JSON.parse method");

const friends = JSON.parse(fileData);

const SHOW_FRIENDS = 'Display Friends List';
const ADD_FRIENDS = 'Add new friend';

const actions = [
  SHOW_FRIENDS,
  ADD_FRIENDS
];

let canRunProgram = true;
while (canRunProgram) {
  const selectedIndex = readline.keyInSelect(actions);
  if (selectedIndex === -1) {
    canRunProgram = false;
  } else {
    const SELECT_ACTION = actions[selectedIndex];
    if (SELECT_ACTION === SHOW_FRIENDS) {
      console.log(friends);
    } else {
      const friendName = readline.question('Please enter new friend name: ');
      if (friendName) {
        friends.push(friendName);
        // console.log("Type of friends is ", typeof friends)

        // Here we need to convert Object/Array to String for saving the file
        // By using JSON.stringify method
        const friendsData = JSON.stringify(friends)
        fs.writeFileSync(FRIENDS_FILE_PATH, friendsData);
      }
    }
  }
}
