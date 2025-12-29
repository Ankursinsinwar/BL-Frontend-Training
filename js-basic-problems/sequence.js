// 1. Single digit random
console.log(Math.floor(Math.random() * 10));

// 2. Dice number (1-6)
console.log(Math.floor(Math.random() * 6) + 1);

// 3. Add two dice numbers
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
console.log("Sum:", dice1 + dice2);

// 4. 5 random 2-digit numbers
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += Math.floor(Math.random() * 90) + 10;
}
avg = sum / 5;
console.log("Sum:", sum);
console.log("Average:", avg);

// 5. Unit Conversion
//// a. 1ft = 12 in then 42 in = ? ft 
console.log("1ft = 12 in then 42 in =",42 / 12, " ft");
//// b.  Rectangular Plot of 60 feet x 40 feet in meters (1ft == 0.3048m)
let areaMeters = (60 * 0.3048) * (40 * 0.3048);
console.log("Area in meters:", areaMeters);
//// c.  Calculate area of 25 such plots in acres (1 acre = 4046.85642 sq.meter)
console.log("25 plots in acres:", (areaMeters * 25) / 4046.86);
