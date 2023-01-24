const marks = [
  45,
  66,
  37,
  97,
  56,
  45,
  79
];

// 45 + 66 + 37 + 97 + 56 + 45 + 79;

let total = 0;
let index = 0;
while (index < marks.length) {
  const currentValue = marks[index];
  total = total + currentValue;
  index++;
}

console.log(`Sum of numbers using WHILE LOOP`, total);

let totalValue = 0;
for (let index = 0; index < marks.length; index++) {
  const currentValue = marks[index];
  totalValue = totalValue + currentValue;
}

console.log(`Sum of numbers using FOR LOOP`, totalValue);



/*
[
  45,  66,  37,  97,  56,  45,  79
];
*/

console.log(marks);
const sumOfValues = marks.reduce(function (
  previousValue,
  currentValue,
  // currentIndex,
  // originalArray
) {

  // console.log(`Previous Value = `, previousValue);
  // console.log(`Current Value = `, currentValue);
  // console.log(`Current Index = `, currentIndex);
  // console.log(`Original Array = `, originalArray);

  return previousValue + currentValue;

})

console.log(`Sum of values using reduce method`, sumOfValues);


const studentsMarks = [
  [45, 89, 76, 56, 45, 99], // 410
  [89, 78, 90, 45, 77, 56], // 435
  [87, 47, 38, 65, 88, 51], // 376
  [45, 77, 56, 45, 89, 76], // 388
  [78, 90, 45, 76, 38, 65], // 392
];

// const totalMarksOfStudents = [
//   410,
//   435,
//   376,
//   388,
//   392
// ]

const totalMarks = studentsMarks.map(function (arrayValue) {
  return arrayValue.reduce((prev, curr) => prev + curr);
});

console.log("-----------------------")
console.log("Total Marks of Student")
console.log("-----------------------")
console.log(totalMarks);

console.log("-----------------------")
console.log("Average Marks of Students")
console.log("-----------------------")

const averageMarks = totalMarks.map((value) => (value / 600) * 100);
console.log(averageMarks)

const convertToInteger = averageMarks.map(value => parseInt(value) + "%");
console.log(convertToInteger);

const markAbove65Percentage = averageMarks.filter((value) => {
  const valueInInterger = parseInt(value);
  return valueInInterger > 65;
});
console.log(markAbove65Percentage);

