// before ES6 version, there is only one way to create 
// variable in javasript is using var keyword
var myVariable = "Some data";

//in ES6 version, let and const are introduce to create
// variables

// var declaration with value
var myName = "Syed";

// var redeclaration with same variable identifier
var myName = "Syed Zakeer";


// let declaration with value
let myHomeTown = "Guntur";

// we can't redeclare let variable again
// let myHomeTown = "ongole"; // Javascript will throw error

// But we can reassign new value to var or let
myName = "Syed Zakeer Hussain"
myHomeTown = "Hyderabad"


// for var and let we can reassign values (remove old value and update new value)

// for const we need to declare and assign the value
// we can't reassign const value
const DOB = "29/01/1999";

DOB = "12/12/2022";


