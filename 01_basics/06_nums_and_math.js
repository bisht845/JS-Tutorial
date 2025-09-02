const score = 400

// console.log(score);

const balance = new Number (100); // we can define also in number this is a new or second way to define

// console.log(balance);

// console.log(balance.toString().length); // we can convert number to string like this then we use properties of string methods.

// console.log(balance.toFixed(2)); // this method to use for xero(0) after number (like > 100.00) when we use this then  we difine the number who gives us xeros after number .we can use 1 value but 2 is readable and right thing 

// const otherNumber = 23.5165

// console.log (otherNumber.toPrecision(4))  // use for formatting a number and Returns a string with a number rounded and written exponential notation. Always retrun rounded value not exact.

const hundreds = 1000000

// console.log (hundreds.toLocaleString()); // this return in us format 
// console.log(hundreds.toLocaleString('en-IN')); // This return in india rupees value 


// +++++++++++++++++++++++++ Maths +++++++++++++++++++++ //

console.log(Math);
console.log(Math.abs(100));  // ABS is only absolute value .This convert the negative value to positive. <= only works on this not positive to negative 

console.log(Math.round(4.3)); // If the digit after your rounding position is 5 or more → add +1 and If the digit is 4 or less → keep as is 

// Rounding Rule (Very Important)

// Look at the next digit:

// 0–4 → round down (Keep same value)

// 5–9 → round up (Increase last kept digit by +1)

console.log(Math.ceil(4.9)); 

/* . Math.ceil(x) is a built-in JavaScript method that returns the smallest integer greater than or equal to a given number.

1- Always goes UP (The word "ceil" comes from ceiling → like the roof of a room.) . 2- Works on both positive and negative numbers. (Math.ceil(-3.1) → -3). 3- If number has decimals → go UP. 4- If already an integer → keep same
=> Smallest integer ≥ number (go up) = (4.2 → 5) .
=> Ceil → goes up.
=> Ceil → goes closer to zero.
*/

console.log(Math.floor(8.9)); 

/*   . Returns the largest integer less than or equal to x. (Largest integer ≤ number (go down) = 4.9 → 4 )

=>  Think of floor = ground → always pushes the number downward.
=>  Always goes down (towards −∞).
=>  Floor → goes down. 
=>  Floor → goes more negative.

*/

console.log(Math.min(3,4,5,6,8,9)); 
// Defination =>  Returns the smallest (minimum) number from the given values
// Use Case =>    When you want to find the lowest value from a list of numbers.

console.log(Math.max(3,4,5,6,8,9)); 
// Definition => Returns the largest (maximum) number from the given values.
// Use Case =>   When you want to find the highest value from a list of numbers.

console.log(Math.random()); // Gives random value between 0.25 to 0.9999 but Math.random() never returns 1, always less than 1.
// Definition => Math.random() is a JavaScript method that returns a random decimal number between: 0 (inclusive) and 1 (exclusive).
// it means (it can return values like 0.25, 0.78, 0.9999, but never 1.)
// Each time you run it, the value will be different.

console.log(Math.random()*10); // So * 10 is used to convert up the random number from small decimals (0–1) to convert bigger numbers (0–10).

console.log(Math.random()*10 + 1); // +1 → shift range if you want to start from 1 instead of 0 then +1 convert into 1 to 10 Now value comes between 1 to 10

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // Math.floor() → remove decimals

