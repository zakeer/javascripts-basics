1. In the following code, what are the final length values for `array1`, `array2`, `array3`, `array4`, and `array5`?
```javascript
 let array1 = [1, 2, undefined, 4];

 let array2 = [1];
 array2.length = 5;
 
 let array3 = [];
 array3[-1] = [1];

 let array4 = [1, 2, 3, 4, 5];
 array4.length = 3;
 
 let array5 = [];
 array5[100] = 3;
```

2. Log all of the even values from `myArray` to the console.
```javascript
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
```
 **expected output**:
```javascript
6
4
2
4
16
0
```

3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.
```javascript
let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
];
```
 **expected output**:
```javascript
6
4
2
4
16
0
```

4. Let's try another variation on the even-numbers theme.
    We'll return to the simpler one-dimensional array. In this problem, we want to use the `map` function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string `'even'`; otherwise, the element in the new array should contain `'odd'`.
```javascript
let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
];
```
 **expected output**:
```javascript
[
    'odd', 'odd', 'even', 'odd',
    'even', 'even', 'even', 'odd',
    'odd', 'even', 'even',
]
```

5. Write a `findIntegers` function that takes an array argument and returns an array that contains only the integers from the input array. Use the `filter` method in your function.
```javascript
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
```
_hint: You can use `Number.isInteger(value)` to determine whether a numeric value is an integer. It returns `true` if the value is an integer, `false` otherwise._

6. Use `reduce` to compute the **sum of the squares** of all of the numbers in an array:
```javascript
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
```
_Note: that **83** is 3\*3 + 5\*5 + 7\*7_

7. Write some code to replace the value `6` in the following array with `606`:
```javascript
let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
];
```
_You don't have to search the array. Just write an **assignment** that replaces the **6** with **606**._
  