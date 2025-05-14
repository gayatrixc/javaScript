console.log("=== 1. FUNCTIONS ===");

// Named function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Gayatri")); // Hello, Gayatri!

// Function Expression (Anonymous)
const square = function(num) {
  return num * num;
};
console.log("Square of 5:", square(5)); // 25

// Arrow Function
const multiply = (a, b) => a * b;
console.log("3 * 4 =", multiply(3, 4)); // 12

console.log("\n=== 2. SCOPE ===");

// Global Scope
let globalVar = "I am Global";

function checkScope() {
  // Function Scope
  let functionVar = "I am inside a function";

  if (true) {
    // Block Scope
    let blockVar = "I am inside a block";
    console.log(blockVar); // Works
  }

  console.log(globalVar);   // Works
  console.log(functionVar); // Works
  // console.log(blockVar); // ❌ Error: blockVar is not defined
}

checkScope();

console.log("\n=== 3. CLOSURES ===");

function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outerFunction();
counter(); // 1
counter(); // 2
counter(); // 3

console.log("\n=== 4. ARRAYS ===");

let fruits = ["apple", "banana", "mango"];
console.log("Fruits:", fruits);
console.log("First Fruit:", fruits[0]);

console.log("\n=== 5. ARRAY METHODS ===");

let numbers = [1, 2, 3];
console.log("Original Array:", numbers);

// push
numbers.push(4);
console.log("After push(4):", numbers);

// pop
numbers.pop();
console.log("After pop():", numbers);

// shift
numbers.shift();
console.log("After shift():", numbers);

// unshift
numbers.unshift(0);
console.log("After unshift(0):", numbers);

// forEach
console.log("Using forEach:");
numbers.forEach((n) => console.log(n * 10)); // multiply each by 10

// map
const squares = numbers.map(n => n ** 2);
console.log("Squares using map():", squares);

// filter
const even = numbers.filter(n => n % 2 === 0);
console.log("Even numbers using filter():", even);

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce():", sum);

// find
const found = numbers.find(n => n > 1);
console.log("First number > 1 using find():", found);

// includes
console.log("Includes 2?", numbers.includes(2)); // true

// sort
let unsorted = [5, 2, 8, 1];
console.log("Before sort():", unsorted);
unsorted.sort((a, b) => a - b);
console.log("After sort():", unsorted);
