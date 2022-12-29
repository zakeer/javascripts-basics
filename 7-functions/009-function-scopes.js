// Global Scope
const fullname = `Syed Zakeer Hussain`;

// define a function
function printDetails() {
  // Function Scope
  const city = 'Guntur';

  console.log({
    name: fullname,
    city: city
  })
}

// Invoking function
printDetails();
console.log(`Fullname = ${fullname}`);
console.log(`City = ${city}`);