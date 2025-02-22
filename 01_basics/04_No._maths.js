/*
JavaScript Numbers and Math Methods

- JavaScript uses a 64-bit floating-point format for numbers.
- It provides various built-in methods for mathematical operations.
*/

// 1. Number Declaration
let integerNum = 42;
let floatNum = 3.14;
let bigIntNum = BigInt(9007199254740991);
console.log("Integer:", integerNum, "Float:", floatNum, "BigInt:", bigIntNum);

// 2. Number Methods
let num = 123.456;
console.log("Fixed to 2 decimals:", num.toFixed(2)); // "123.46" (Rounds and formats to 2 decimal places)
console.log("Precision 4:", num.toPrecision(4)); // "123.5" (Formats number with a specified precision)
console.log("Convert to string:", num.toString()); // Converts number to string representation
console.log("Parse Int:", parseInt("42px")); // 42 (Extracts an integer from a string)
console.log("Parse Float:", parseFloat("3.14 meters")); // 3.14 (Extracts a floating-point number from a string)
console.log("Check if NaN:", isNaN("hello")); // true (Checks if value is Not-a-Number)
console.log("Check if Finite:", isFinite(100)); // true (Checks if value is a finite number)

// 3. Math Methods
console.log("Absolute:", Math.abs(-5)); // 5 (Returns absolute value)
console.log("Ceil:", Math.ceil(4.2)); // 5 (Rounds up to the nearest integer)
console.log("Floor:", Math.floor(4.9)); // 4 (Rounds down to the nearest integer)
console.log("Round:", Math.round(4.6)); // 5 (Rounds to the nearest integer)
console.log("Truncate:", Math.trunc(4.9)); // 4 (Removes decimal part without rounding)
console.log("Power:", Math.pow(2, 3)); // 8 (Raises 2 to the power of 3)
console.log("Square Root:", Math.sqrt(25)); // 5 (Returns square root of number)
console.log("Max:", Math.max(10, 20, 30)); // 30 (Returns largest value from list)
console.log("Min:", Math.min(10, 20, 30)); // 10 (Returns smallest value from list)
console.log("Random (0-1):", Math.random()); // Generates a random number between 0 and 1

// 4. Special Number Values
console.log("Infinity:", Infinity); // Represents positive infinity
console.log("-Infinity:", -Infinity); // Represents negative infinity
console.log("NaN:", NaN); // Represents Not-a-Number (Invalid numerical result)

/*
Summary of Methods Used:
- Number Methods: toFixed(), toPrecision(), toString(), parseInt(), parseFloat(), isNaN(), isFinite()
- Math Methods: abs(), ceil(), floor(), round(), trunc(), pow(), sqrt(), max(), min(), random()
- Special Values: Infinity, -Infinity, NaN
*/

console.log("JavaScript Number and Math Methods Demonstration Completed!");
