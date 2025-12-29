// for taking inputs:
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint:true});
/////////////////////////////////////////////////////////////////////////

// Digit to word
let n = Number(prompt("Enter a single digit number:"));

if (n === 0) console.log("Zero");
else if (n === 1) console.log("One");
else if (n === 2) console.log("Two");
else if (n === 3) console.log("Three");
else if (n === 4) console.log("Four");
else if (n === 5) console.log("Five");
else if (n === 6) console.log("Six");
else if (n === 7) console.log("Seven");
else if (n === 8) console.log("Eight");
else if (n === 9) console.log("Nine");
else console.log("Invalid");


// Weekday
let dayNum = Number(prompt("Enter day number (1-7):"));
if (dayNum === 1) console.log("Sunday");
else if (dayNum === 2) console.log("Monday");
else if (dayNum === 3) console.log("Tuesday");
else if (dayNum === 4) console.log("Wednesday");
else if (dayNum === 5) console.log("Thursday");
else if (dayNum === 6) console.log("Friday");
else if (dayNum === 7) console.log("Saturday");
else console.log("Invalid");


// Units
let unit = Number(prompt("Enter number:"));

if (unit === 1) console.log("Unit");
else if (unit === 10) console.log("Ten");
else if (unit === 100) console.log("Hundred");
else if (unit === 1000) console.log("Thousand");
else console.log("Invalid");


// Arithmetic operations
let a = 5, b = 3, c = 2;

let results = [
    a + b * c,
    a % b + c,
    c + a / b,
    a * b + c
];

console.log("Results:", results);

// Use spread operator with array
let max = Math.max(...results);
let min = Math.min(...results);

console.log("Maximum:", max);
console.log("Minimum:", min);

