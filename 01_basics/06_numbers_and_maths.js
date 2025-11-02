// const score = 100; // number automatically assigned
// console.log(score); // number
// // but what if we want to assign a number explicitly
// const scoreExplicit = new Number(100);

// console.log(scoreExplicit); // number

// console.log(scoreExplicit.toString().length); // "100"

// console.log(scoreExplicit.toFixed(2)); // "100.00"

// const num1 = 10.4390 
// console.log(num1.toFixed(2)); // "10.43"

// console.log(num1.toPrecision(3)); // "10.4" returns string

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" adds commas based on locale

// // max value and min value in js
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// ++++++++++++++++++++ Maths ++++++++++++++++++++
console.log(Math); // Math is a built-in object that has properties and methods for mathematical constants and functions.

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9));// 4
console.log(Math.ceil(4.1)); // 5
sqrt = Math.sqrt(16);
console.log(sqrt); // 4
max = Math.max(2,4,6,8,10);
console.log(max); // 10
min = Math.min(2,4,6,8,10);
console.log(min); // 2
console.log(Math.random()); // returns random number between 0 and 1
console.log(Math.random()*100); // returns random number between 0 and 100
console.log(Math.random()*100 + 1); // returns random number between 1 and 100

// round in random number
console.log(Math.round(Math.random()*100 + 1)); // returns random number between 1 and 100 rounded

const mini = 10
const maxi = 20

// random number between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns random number between min and max inclusive