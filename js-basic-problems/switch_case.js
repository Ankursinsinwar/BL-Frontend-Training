// for taking inputs:
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint:true});
/////////////////////////////////////////////////////////////////////////


// Digit to word
let num = Number(prompt("Number: "));
switch (num) {
    case 0: console.log("Zero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break
    case 4: console.log("Four"); break
    case 5: console.log("Five"); break
    case 6: console.log("Six"); break
    case 7: console.log("Seven"); break
    case 8: console.log("Eight"); break
    case 9: console.log("Nine"); break
    default: console.log("Invalid");
}


// Weekday
let dayNum = Number(prompt("Enter day number (1-7):"));
switch (dayNum) {
case 0: console.log("Sunday");break
case 2: console.log("Monday");break
case 3: console.log("Tuesday");break
case 4: console.log("Wednesday");break
case 5: console.log("Thursday");break
case 6: console.log("Friday");break
case 7: console.log("Saturday");break
default: console.log("Invalid");
}


// Units
let unit = Number(prompt("Enter number:"));
switch (unit) {
case 1: console.log("Unit");break
case 10: console.log("Ten");break
case 100: console.log("Hundred");break
case 1000: console.log("Thousand");break
default: console.log("Invalid");
}


// Unit conversion
let value = Number(prompt("Enter Value: "));
console.log("1. Feet to Inch\n 2. Feet to Mete\n 3. Inch to Feet\n 4. Meter to Feet")
let choice = Number(prompt("Enter your choice: "));

switch (choice) {
    case 1: console.log(value, " Feet =", value * 12 , " Inch"); break;
    case 2: console.log(value, " Feet =", value * 0.3048 , " Meter"); break;
    case 3: console.log(value, " Inch =", value / 12 , " Feet"); break;
    case 4: console.log(value, " Meter =", value / 0.3048 , " Feet"); break;
}
