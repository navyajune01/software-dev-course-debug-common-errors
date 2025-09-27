/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");

// What’s Wrong?

// ❌ SYNTAX ERROR: Missing closing quote and parenthesis in console.log()
// ✅ FIXED: Added closing quote and parenthesis

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Skipping non-number value: ${numbers[i]}`);
  }
}
// What’s Wrong?

// ❌ RUNTIME ERROR: Attempting to multiply a string ("eight") causes NaN
// ✅ FIXED: Added a type check to skip non-numeric values

// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Number is divisible by i, so it's NOT prime
    }
  }
  return true; // No divisors found, number IS prime
}

console.log(isPrime(7)); // ✅ Expected output: true
console.log(isPrime(10)); // ✅ Expected output: false

// What’s Wrong?

// ❌ LOGICAL ERROR: Returning `true` when a number *is divisible* (i.e., not prime)
// ✅ FIXED: Return false if divisible, true at the end if no divisors found