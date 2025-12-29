// for taking inputs:
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint:true});
/////////////////////////////////////////////////////////////////////////



let choice = prompt("Choose conversion: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius");
let temp = Number(prompt("Enter the temperature value:"));

switch (choice) {
    case "1": // Celsius to Fahrenheit
        if (temp >= 0 && temp <= 100) {
            let degF = (temp * 9/5) + 32;
            console.log(`${temp}°C is ${degF.toFixed(2)}°F`);
        } else {
            console.log("Input out of range (0°C to 100°C)");
        }
        break;
    case "2": // Fahrenheit to Celsius
        if (temp >= 32 && temp <= 212) {
            let degC = (temp - 32) * 5/9;
            console.log(`${temp}°F is ${degC.toFixed(2)}°C`);
        } else {
            console.log("Input out of range (32°F to 212°F)");
        }
        break;
    default:
        console.log("Invalid selection.");
}


// check palindrome
function arePalindromes(num1, num2) {
    function isPalindrome(n) {
        let original = n.toString();
        let reversed = original.split('').reverse().join('');
        return Number(reversed);
    }
    return isPalindrome(num1) === num2;
}

console.log(arePalindromes(125, 521));//true
console.log(arePalindromes(125, 523));//false



// a. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// b. Function to get the palindrome of a number
function getPalindrome(num) {
    return Number(num.toString().split('').reverse().join(''));
}

// Logic to check both
let userInput = Number(prompt("Enter a number to check:"));

if (isPrime(userInput)) {
    console.log(`${userInput} is Prime.`);
    let palindrome = getPalindrome(userInput);
    
    // c. Check if the Palindrome number is also prime
    if (isPrime(palindrome)) {
        console.log(`Its palindrome ${palindrome} is also Prime!`);
    } else {
        console.log(`Its palindrome ${palindrome} is NOT Prime.`);
    }
} else {
    console.log(`${userInput} is not a Prime number.`);
}
