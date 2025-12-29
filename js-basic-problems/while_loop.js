// for taking inputs:
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint:true});
/////////////////////////////////////////////////////////////////////////

// power of 2
let n = Number(prompt("Enter Number: ")); 
let i = 0;
let powerOfTwo = 1;

console.log(`Powers of 2 up to 2^${n} (limit 256):`);
while (i <= n && powerOfTwo <= 256) {
    console.log(`2^${i} = ${powerOfTwo}`);
    powerOfTwo = Math.pow(2, ++i);
}


// magic No.
let low = 1;
let high = 100;
console.log("Think of a number between 1 and 100.");

while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let choice = prompt(`Is your number greater than ${mid}? (yes/no)`);
    
    if (choice.toLowerCase() === "yes") {
        low = mid + 1;
    } else {
        high = mid;
    }
}
console.log(`The Magic Number is ${low}!`);



let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.floor(Math.random() * 2); // 0 for Heads, 1 for Tails
    if (flip === 0) headsCount++;
    else tailsCount++;
}

console.log(`Final Score - Heads: ${headsCount}, Tails: ${tailsCount}`);
console.log((headsCount === 11 ? "Heads" : "Tails") + " Wins!");


//gamble
let money = 100;
let goal = 200;
let betsMade = 0;
let wins = 0;

while (money > 0 && money < goal) {
    betsMade++;
    let betResult = Math.floor(Math.random() * 2); // 0 for Loss, 1 for Win
    
    if (betResult === 1) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Game Over! Final Balance: Rs ${money}`);
console.log(`Total Bets: ${betsMade}`);
console.log(`Total Wins: ${wins}`);
console.log(money === goal ? "Reached the Goal!" : "Went Broke.");
