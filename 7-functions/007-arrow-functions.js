const add = (a, b) => {
  return a + b;
}

const sumOf2Plus8 = add();
console.log(`Sum of 2 plus 8 is ${sumOf2Plus8}`);

const addWithDefault = (a = 0, b = 0) => {
  return a + b;
}
const sumOf10Plus80 = addWithDefault();
console.log(`Sum of 100 plus 80 is ${sumOf10Plus80}`);