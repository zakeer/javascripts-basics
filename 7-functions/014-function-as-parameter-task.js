function execute(paramOne, paramTwo) {
  const valueOne = paramOne();
  const valueTwo = paramTwo();
  return {
    valueOne: valueOne,
    valueTwo: valueTwo
  }
}

function addition() {
  return 100 + 300;
}

function multiply() {
  return 100 * 300;
}

const result = execute(addition, multiply); // ? { valueOne: 400, valueTwo: 30000 }
console.log(result);

const anotherResult = execute(
  () => {
    return 20 * 10;
  },
  () => {
    return 56 + 44;
  }
); // { valueOne: 200, valueTwo: 100 }
// execute( () => { return 20*10 }, () => { return 56+44 } );

console.log(anotherResult);
