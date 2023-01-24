var first_array = [10, 100];
var second_array = [10, 100];

console.log(first_array === second_array); // false

//                 10       ===       10
console.log( first_array[0] === second_array[0]) // true


var marks = [10, 20, 10, 30];
var marks_copy = marks;
console.log(marks === marks_copy);