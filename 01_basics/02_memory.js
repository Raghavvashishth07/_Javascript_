/*
JavaScript Memory Management: Stack vs Heap

STACK (Primitive Data Types - Number, String, Boolean, etc.)
- Follows LIFO (Last In, First Out) principle.
- Used for storing static data (fixed size, known at compile time).
- Example: Variables declared with let, const, and function calls.

HEAP (Reference Data Types - Objects, Arrays, Functions, etc.)
- Used for dynamic memory allocation.
- Stores objects, which are referenced from variables stored in the stack.

---------------------
Diagram Representation:

Stack (Primitive Data Types):
---------------------
|      age = 30     |
|   name = "John"   |
|  isStudent = true |
---------------------

Heap (Reference Data Types):
----------------------------
| Person Object  --> { name: "Alice", age: 25 } |
| Numbers Array  --> [1, 2, 3, 4, 5]            |
| greet Function --> function() {...}           |
----------------------------

Flowchart Representation:

       +-----------------+
       |  Stack Memory   |
       +-----------------+
       |   Primitive     |
       |   Data Types    |
       +-----------------+
              |
              v
       +-----------------+
       | Heap Memory     |
       +-----------------+
       | Reference Data  |
       | Objects, Arrays |
       +-----------------+

Fetching Memory Simulation:
1. Stack Memory Fetch:
   - Fetching a primitive value involves directly retrieving it from stack memory.
   - Example: Accessing `age` fetches the stored value `30` directly.

2. Heap Memory Fetch:
   - Fetching an object retrieves a reference stored in the stack first.
   - Then, it follows the reference to the heap to get the actual object.
   - Example: Accessing `person.age` first retrieves the reference from stack,
     then fetches `{ name: "Alice", age: 25 }` from heap memory.
*/

// Example demonstrating stack and heap usage

// Stack Example (Primitive Data Types)
let age = 30; // Stored directly in stack
let name = "John"; // Stored directly in stack
let isStudent = true; // Stored directly in stack

// Heap Example (Reference Data Types)
let person = { name: "Alice", age: 25 }; // Reference stored in stack, object stored in heap
let numbersArray = [1, 2, 3, 4, 5]; // Reference stored in stack, array stored in heap
let greet = function() { return "Hello!"; }; // Function stored in heap, reference in stack

// Copying primitives (Stack - Creates a separate copy)
let newAge = age; // Separate copy stored in stack
newAge = 35; // Modifies only newAge, not age

console.log("Original Age:", age); // 30
console.log("New Age:", newAge);   // 35

// Copying objects (Heap - Creates a reference, not a copy)
let newPerson = person; // newPerson gets the same reference, not a copy
newPerson.age = 28; // Modifies the original person object as well

console.log("Original Person Age:", person.age); // 28
console.log("New Person Age:", newPerson.age);   // 28

// Demonstrating stack and heap allocation visually
console.log("Memory Management in JavaScript: Stack vs Heap");
