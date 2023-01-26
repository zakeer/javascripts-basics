import readline from 'readline-sync';
import chalk from 'chalk';

const friends = ['Syed', 'Zakeer'];

const SHOW_FRIENDS = 'Display Friends';
const ADD_FRIEND = 'Add Friends';

const USER_ACTIONS = [
  SHOW_FRIENDS, // 0
  ADD_FRIEND    // 1
]

let canRunProgram = true

while (canRunProgram) {
  const userActionIndex = readline.keyInSelect(USER_ACTIONS);
  console.log(chalk.bgRed(`User Selected Action Index: `), chalk.red(userActionIndex));

  if (userActionIndex === -1) {
    console.log(chalk.bgRed("Stoping Application...."));
    canRunProgram = false;
  } else {
    const USER_SELECTED_ACTION = USER_ACTIONS[userActionIndex];
    console.log(chalk.bgGreen(`User Selected Action: `), chalk.green(USER_SELECTED_ACTION));

    if (USER_SELECTED_ACTION === SHOW_FRIENDS) {
      console.log(friends);
    } else {
      const newFriendName = readline.question("Please enter new friend name: ");
      friends.push(newFriendName);
    }
  }


}

