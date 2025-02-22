// const accountId = 212121
// let accountName = "Raghav"
// let accountCity = "gurugram"
// var accountState = "Haryana"
// console.table([accountCity,accountId,accountName,accountState])
// let numstring="abc"
// let nummbers=Number(numstring)
// console.log(nummbers)
// JavaScript Variables, Data Types, and Type Conversions

// 1. Declaring Variables
let name = "John";  // String
const age = 25;      // Number (constant)
var isStudent = true; // Boolean

// 2. Data Types
let number = 42;           // Number
let bigIntNum = 12345678901234567890n; // BigInt
let decimal = 3.14;       // Number (float)
let text = "Hello, World!"; // String
let isTrue = false;       // Boolean
let emptyValue = null;    // Null
let undefinedValue;       // Undefined
let uniqueId = Symbol("id"); // Symbol
let person = { name: "Alice", age: 30 }; // Object
let numbersArray = [1, 2, 3, 4, 5]; // Array (a type of object)
let greet = function() { return "Hello!"; }; // Function (a type of object)

// 3. Type Checking
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of bigIntNum:", typeof bigIntNum);
console.log("Type of uniqueId:", typeof uniqueId);
console.log("Type of person:", typeof person);
console.log("Type of numbersArray:", typeof numbersArray);
console.log("Type of greet:", typeof greet);

// 4. Type Conversion
// String to Number
let strNum = "100";
let convertedNumber = Number(strNum);
console.log("Converted Number:", convertedNumber, "Type:", typeof convertedNumber);

// Number to String
let numToStr = String(42);
console.log("Converted String:", numToStr, "Type:", typeof numToStr);

// Boolean to Number
let boolToNum = Number(true); // true -> 1, false -> 0
console.log("Boolean to Number:", boolToNum);

// Number to Boolean
let numToBool = Boolean(0); // 0 -> false, non-zero -> true
console.log("Number to Boolean:", numToBool);

// Implicit Type Conversion (Type Coercion)
console.log("5" + 2);  // "52" (string concatenation)
console.log("5" - 2);  // 3 (string converted to number)
console.log(5 * "2");  // 10 (string converted to number)
console.log("5" * "2"); // 10 (both converted to numbers)
console.log(10 / "2");  // 5
console.log("hello" * 2); // NaN (Not a Number)

// 5. Checking NaN
console.log("Is NaN:", isNaN("hello" * 2)); // true

// 6. Parsing Integers and Floats
console.log("Parsed Int:", parseInt("123px"));  // 123
console.log("Parsed Float:", parseFloat("3.14text")); // 3.14

// 7. Strict Equality vs. Loose Equality
console.log(5 == "5");  // true (type coercion)
console.log(5 === "5"); // false (strict type check)

// 8. Demonstrating let, const, and var Scope
function variableScope() {
    if (true) {
        var varVariable = "I'm a var";
        let letVariable = "I'm a let";
        const constVariable = "I'm a const";
    }
    console.log(varVariable); // Accessible (function-scoped)
    // console.log(letVariable); // Error (block-scoped)
    // console.log(constVariable); // Error (block-scoped)
}
variableScope();

// Summary
console.log("Variables, Data Types, and Conversions in JavaScript explained!");