/*
JavaScript Strings and Methods

- Strings are sequences of characters enclosed in quotes.
- JavaScript provides various built-in methods to manipulate and work with strings.
*/

// 1. String Declaration
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}!`;
console.log("Template Literal:", templateLiteral); // "Hello, World!"

// 2. Common String Methods
let text = "  JavaScript String Methods  ";

// String Length
console.log("Length:", text.length);

// Convert to Upper and Lower Case
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// Trim (removes spaces from both ends)
console.log("Trimmed:", text.trim());

// Substring & Slice
console.log("Substring (0,10):", text.substring(0, 10));
console.log("Slice (-10):", text.slice(-10));

// Replace and ReplaceAll
console.log("Replace 'Methods' with 'Functions':", text.replace("Methods", "Functions"));
console.log("Replace all ' ':", text.replaceAll(" ", "-"));

// Splitting a String
let wordsArray = text.trim().split(" ");
console.log("Split into array:", wordsArray);

// Searching in a String
console.log("Index of 'Script':", text.indexOf("Script"));
console.log("Includes 'Java':", text.includes("Java"));

// Concatenation
let part1 = "Hello";
let part2 = "World";
console.log("Concatenated:", part1.concat(" ", part2));

// Repeat a String
console.log("Repeat 3 times:", part1.repeat(3));

/*
Summary of Methods Used:
- length
- toUpperCase(), toLowerCase()
- trim()
- substring(), slice()
- replace(), replaceAll()
- split()
- indexOf(), includes()
- concat()
- repeat()
*/

console.log("JavaScript String Methods Demonstration Completed!");
