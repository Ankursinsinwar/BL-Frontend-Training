// for taking inputs:
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint:true});
/////////////////////////////////////////////////////////////////////////




// Power of 2
let n = Number(prompt("Enter number (for power of 2):"));
for (let i = 0; i <= n; i++) {
    console.log(2 ** i);
}

// Harmonic number
let harmonic = Number(prompt("Enter number(for harmonic number):"));
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}
console.log("Harmonic:", harmonic);

// Prime check
let num = Number(prompt("Enter number(for prime check):"));
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) isPrime = false;
}
console.log(isPrime ? "Prime" : "Not Prime");


// Prime Numbers (Extended)
let start = Number(prompt("Enter start number(for prime numbers):"));
let end = Number(prompt("Enter end number(for prime numbers):"));
let primeNum = [];
for (let i = start; i <= end; i++){
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0){
            prime = false;
            break;
        }
    }
    if (prime) {
       primeNum.push(i);
    }
}
console.log(primeNum);


// Factorial
let fact = Number(prompt("Enter number(for factorial):"));
console.log("Prime factors of " + fact + " are:");

for (let i = 2; i * i <= fact; i++) {
    // While i divides N, print i and divide N
    while (fact % i === 0) {
        console.log(i);
        fact = fact / i;
    }
}

// If N is still greater than 1, the remaining N is prime
if (fact > 1) {
    console.log(fact);
}

