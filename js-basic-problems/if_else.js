// for taking inputs:
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint:true});
/////////////////////////////////////////////////////////////////////////

// Min & Max of 5 random 3-digit numbers
let min, max;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    // console.log(num);
    if (i === 0) {
        // Initialize min and max with first number
        min = num;
        max = num;
    } else {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
}

console.log("Minimum: ", min);
console.log("Maximum: ", max);


// Date between March 20 and June 20
let day = prompt("Day: ");
let month = prompt("Month: ");
console.log((month >= 3 && month <=6) ? (((month ==3 && day <20) || (month == 6 && day > 20)) ? false : true) : false);

// Leap Year
let year = prompt("Year: ");
console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year" : "Not Leap Year");

// Coin Flip 
console.log(Math.random() < 0.5 ? "Heads" : "Tails");
