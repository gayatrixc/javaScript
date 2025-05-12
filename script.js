// Variables
// 1. Declaration
var a; // variable declared using var (function-scoped)
let d; // variable declared using let (block-scoped)
const c = 30; // const must be initialized (can't be reassigned)

// 2. Assignment
a = 10;
d = 20;

// 3. Printing values
console.log(a); // 10
console.log("a"); // outputs the string "a"

// 4. const can't be reassigned
// c = 40; // ❌ Error: Assignment to constant variable

// 5. Block scoping
{
    let x = 100;
    console.log(x); // works here
}
// console.log(x); // ❌ Error: x is not defined outside the block

// Primitive vs Non-Primitive Data Types
// Primitive types: number, string, boolean, null, undefined, symbol, bigint
let num = 10;
let str = "Hello";
let isOn = true;
let nothing = null;
let notDefined; // undefined

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof notDefined); // undefined

// Non-primitive types: object, array, function

// Objects and Arrays
// Object: key-value pairs
let person = {
    name: "Alice",
    age: 25
};
console.log(person.name); // Accessing object property

// Array: ordered list of values
let arr = [1, 2, 3, 4];
console.log(arr[2]); // 3

let colors = ["red", "blue", "green"];
colors.push("yellow"); // adding element
console.log(colors);

// Functions
// Function declaration
function add() {
    console.log(2 + 3);
}
add(); // Call the function

// Function with parameters
function greet(name) {
    console.log("Hello, " + name);
}
greet("Gayatri");

// Function with return value
function square(n) {
    return n * n;
}
let result = square(5); // 25
console.log(result);

let f = 10;
let b = 3;

// Arithmetic Operators
console.log(f + b); // 13
console.log(f - b); // 7
console.log(f * b); // 30
console.log(f / b); // 3.33
console.log(f % b); // 1
console.log(f ** b); // 1000 (exponentiation)
console.log(++f); // 11 (pre-increment)
console.log(f++); // 3 (post-increment)
console.log(b); // 4 (updated after post-increment)

// Assignment Operators
let x = 5;
x += 3; // x = x + 3
console.log(x); // 8

// Comparison Operators
let m = 10, n = "10";

console.log(m == n);  // true (only value comparison)
console.log(m === n); // false (value + type comparison)
console.log(m != n);  // false
console.log(m !== n); // true
console.log(m > 5);   // true
console.log(m <= 10); // true

// Logical Operators
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue);           // false

// Ternary Operator
let age = 20;
let vote = (age >= 18) ? "Yes, you can vote!" : "No, you're too young.";
console.log(vote); // Yes, you can vote!

//  typeof Operator
console.log(typeof 123);         // number
console.log(typeof "hello");     // string
console.log(typeof true);        // boolean
console.log(typeof {});          // object
console.log(typeof []);          // object (arrays are objects)
console.log(typeof null);        // object (quirk in JS)
console.log(typeof undefined);   // undefined
console.log(typeof function(){}); // function

// Control Flow & Loops (Intro)
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Fail");
}

// Loop - for
for (let i = 0; i < 5; i++) {
    console.log("i is", i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log("count is", count);
    count++;
}

// do-while loop
let j = 0;
do {
    console.log("j is", j);
    j++;
} while (j < 2);









