import readline from 'readline-sync';
import chalk from 'chalk';

const ADD_STUDENT = 'Add Student';
const SHOW_STUDENTS = 'Show list of Students'

const USER_INPUTS = [
  ADD_STUDENT,
  SHOW_STUDENTS,
]

let runProgram = true;
let students = [];

while (runProgram) {
  const userChoiceIndex = readline.keyInSelect(USER_INPUTS);
  const userChoice = USER_INPUTS[userChoiceIndex];
  // console.log(`User Selected choice is ${chalk.bgRed(userChoice)}`)

  if (userChoice === ADD_STUDENT) {

    const newStudentName = readline.question("Please enter new student name : ");
    if(newStudentName) {
      students.push(newStudentName);
      console.log(chalk.bgGreen(`${newStudentName} added to student list`));
    }

  } else if (userChoice == SHOW_STUDENTS) {
    console.log(`List of Students`);
    console.log(students);
  } else {
    runProgram = false;
  }
}
