console.log("========= ES6 FEATURES IN-DEPTH =========\n");

/**
 * 1. DEFAULT PARAMETERS
 * Allows setting default values for function parameters if no value is passed.
 */
console.log("1. DEFAULT PARAMETERS");

function welcome(name = "Guest", language = "English") {
  console.log(`Welcome ${name}, Language set to ${language}`);
}

welcome("Gayatri", "Hindi");  // Both arguments provided
welcome("Gayatri");           // One argument, second is default
welcome();                    // No arguments, both use default


/**
 * 2. DESTRUCTURING
 * Unpack values from arrays or properties from objects into distinct variables.
 */
console.log("\n2. DESTRUCTURING");

// Array Destructuring
const languages = ["JavaScript", "Python", "Java", "C++"];
const [firstLang, secondLang, , fourthLang] = languages;
console.log("First:", firstLang);  // JavaScript
console.log("Second:", secondLang); // Python
console.log("Fourth:", fourthLang); // C++

// Object Destructuring
const student = {
  fullName: "Gayatri X",
  rollNo: 102,
  course: "B.Tech",
  address: {
    city: "Hyderabad",
    pincode: 500001
  }
};

const {
  fullName,
  rollNo,
  course,
  address: { city, pincode }
} = student;

console.log(`Name: ${fullName}, Course: ${course}, City: ${city}, Pincode: ${pincode}`);


/**
 * 3. SPREAD & REST OPERATORS
 * Spread (...) unpacks, Rest (...) collects.
 */
console.log("\n3. SPREAD AND REST OPERATORS");

// Spread with arrays
const baseMarks = [75, 80, 85];
const finalMarks = [...baseMarks, 90, 95];
console.log("Spread Array:", finalMarks); // [75, 80, 85, 90, 95]

// Spread with objects
const user1 = { name: "Gayatri", branch: "ECE" };
const user2 = { ...user1, year: "2nd", cgpa: 8.44 };
console.log("Spread Object:", user2);

// Rest with functions
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum of 1,2,3,4:", sumAll(1, 2, 3, 4)); // 10

// Rest in destructuring
const [x, y, ...rest] = [10, 20, 30, 40, 50];
console.log("x:", x, "y:", y, "rest:", rest); // rest: [30, 40, 50]


/**
 * 4. TEMPLATE LITERALS
 * Allows embedded expressions and multi-line strings using backticks (` `).
 */
console.log("\n4. TEMPLATE LITERALS");

const project = "Smart Blind Stick";
const status = "Completed";
const marks = 95;

const report = `
Project Name : ${project}
Status       : ${status}
Marks Awarded: ${marks}/100
`;

console.log("Project Report:\n" + report);


/**
 * 5. ERROR HANDLING
 * Using try...catch blocks to handle exceptions gracefully.
 */
console.log("\n5. ERROR HANDLING");

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    console.log(`Result: ${a / b}`);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("This block always runs. Cleanup if needed.");
  }
}

divide(10, 2);  // Valid
divide(5, 3);   // Throws error

console.log("\n========= END OF SCRIPT =========");
