console.log("While Loop Program");

// Print numbers from 1 to 10;

let currentNumber = 1;
let endingNumber = 10;

        // 1         <=     10        => true
        // 2         <=     10        => true
        // 3         <=     10        => true
        // 4         <=     10        => true
        // 5         <=     10        => true
        // 6         <=     10        => true
        // 7         <=     10        => true
        // 8         <=     10        => true
        // 9         <=     10        => true
        // 10        <=     10        => true
        // 11        <=     10        => false
while (currentNumber <= endingNumber) {
  console.log(`Current Number is ${currentNumber}`);
  currentNumber = currentNumber + 1; // Updating the number
}

