
// Create a blocked scope
{
    var abc = 100;
    let xyz = 200;
}

// Here we can access `abc` identifier value, but we can't have access to `xyz` identifier

// Don't get confuse with {} has an object
var myDetails = {
    key: 'value',
    name: 'Syed',
    age: 30,
    designation: 'UI Developer'
}


var city = "Guntur";
let designation = "UI Dev";

{
    var city = "Ongole";
    let designation = "Frontend Dev"
}

city // "Ongole";
designation // "UI Dev";


console.log("Syed")
console.log( 23 > 78 );