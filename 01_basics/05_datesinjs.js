/*
JavaScript Dates and Time Methods

- JavaScript provides the Date object to work with dates and times.
- The Date object allows creating, formatting, modifying, and comparing date/time values.
*/

// 1. Creating Date Objects
// The Date object can be initialized in multiple ways:
let currentDate = new Date(); // Retrieves the current system date and time
let specificDate = new Date("2024-02-22"); // Creates a date object with a specific date (YYYY-MM-DD format)
let dateFromValues = new Date(2024, 1, 22, 14, 30, 0); // Creates a date object using year, month (0-based), day, hours, minutes, and seconds
console.log("Current Date:", currentDate);
console.log("Specific Date:", specificDate);
console.log("Date from values:", dateFromValues);

// 2. Getting Date Components
// These methods extract specific parts of a Date object:
console.log("Year:", currentDate.getFullYear()); // Returns the full year (e.g., 2024)
console.log("Month:", currentDate.getMonth() + 1); // Returns the month (0-based, so +1 to adjust)
console.log("Date:", currentDate.getDate()); // Returns the day of the month (1-31)
console.log("Day of the Week:", currentDate.getDay()); // Returns the weekday (0 for Sunday, 6 for Saturday)
console.log("Hours:", currentDate.getHours()); // Returns the hour (0-23)
console.log("Minutes:", currentDate.getMinutes()); // Returns the minutes (0-59)
console.log("Seconds:", currentDate.getSeconds()); // Returns the seconds (0-59)
console.log("Milliseconds:", currentDate.getMilliseconds()); // Returns the milliseconds (0-999)

// 3. Formatting Dates
// These methods convert dates into readable string formats:
console.log("ISO Format:", currentDate.toISOString()); // Outputs "YYYY-MM-DDTHH:mm:ss.sssZ" format (UTC timezone)
console.log("UTC String:", currentDate.toUTCString()); // Converts to a human-readable UTC string format
console.log("Locale Date String:", currentDate.toLocaleDateString()); // Outputs date in local format (e.g., MM/DD/YYYY)
console.log("Locale Time String:", currentDate.toLocaleTimeString()); // Outputs time in local format (e.g., HH:MM:SS AM/PM)
console.log("Full Locale String:", currentDate.toLocaleString()); // Outputs both date and time in a localized format

// 4. Modifying Dates
// These methods allow changes to a Date object:
let futureDate = new Date();
futureDate.setFullYear(2025); // Changes the year to 2025
futureDate.setMonth(5); // Changes the month to June (0-based index)
futureDate.setDate(15); // Sets the day to the 15th
console.log("Modified Future Date:", futureDate);

// 5. Comparing Dates
// JavaScript allows comparison of dates using relational operators:
let date1 = new Date("2024-02-22");
let date2 = new Date("2025-02-22");
console.log("Date1 > Date2:", date1 > date2); // false because 2024-02-22 is earlier than 2025-02-22
console.log("Date1 < Date2:", date1 < date2); // true because 2024-02-22 comes before 2025-02-22

// 6. Time Calculations
// Measure the execution time of operations:
let timeStart = new Date();
setTimeout(() => {
    let timeEnd = new Date();
    let timeDiff = timeEnd - timeStart; // Calculates time difference in milliseconds
    console.log("Execution Time (ms):", timeDiff);
}, 1000);

/*
Summary of Methods Used:
- Date Creation: new Date(), Date(year, month, day, hours, minutes, seconds)
- Get Date Components: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds()
- Formatting: toISOString(), toUTCString(), toLocaleDateString(), toLocaleTimeString(), toLocaleString()
- Modifying Dates: setFullYear(), setMonth(), setDate()
- Comparisons: Comparing Date objects using <, >, ===
- Time Calculations: Measuring execution time using Date difference
*/

console.log("JavaScript Date and Time Methods Demonstration Completed!");
