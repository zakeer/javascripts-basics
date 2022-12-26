function greetUser(username = 'UNKNOWN') {
  console.log(`Welcome ${username}!`);
}

greetUser();
greetUser('Adil Hussain');

const welcomeUser = (username = 'UnKnown User') => {
  return `Welcome to my page! ${username}`
}

const welcomeAdil = welcomeUser('Adil Khan');
console.log(welcomeAdil);