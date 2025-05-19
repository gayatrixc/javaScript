// DOM SELECTION METHODS

// 1. getElementById
const byId = document.getElementById("byId");
console.log("Selected by ID:", byId.textContent);

// 2. getElementsByClassName (returns HTMLCollection)
const byClass = document.getElementsByClassName("byClass");
console.log("Selected by Class:", byClass[0].textContent, "and", byClass[1].textContent);

// 3. querySelector / querySelectorAll
const querySel = document.querySelector('[data-role="query"]');
const queryAll = document.querySelectorAll(".byClass");
console.log("Selected with querySelector:", querySel.textContent);
console.log("querySelectorAll returns NodeList:", queryAll.length);


// EVENT LISTENERS

// 1. Change Text Content
const changeTextBtn = document.getElementById("changeTextBtn");
const eventOutput = document.getElementById("eventOutput");

changeTextBtn.addEventListener("click", () => {
  eventOutput.textContent = "✅ Text changed using Event Listener!";
});

// 2. Change Attribute (Image src)
const changeAttrBtn = document.getElementById("changeAttrBtn");
const sampleImg = document.getElementById("sampleImg");

changeAttrBtn.addEventListener("click", () => {
  sampleImg.src = "https://placekitten.com/150/150";
  eventOutput.textContent = "📷 Image changed via attribute!";
});

// 3. Add Dynamic HTML
const addDynamicBtn = document.getElementById("addDynamicBtn");

addDynamicBtn.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "✨ New dynamic content added!";
  eventOutput.appendChild(newPara);
});

// 4. Use document.write() — WARNING: clears page
const writeBtn = document.getElementById("writeBtn");

writeBtn.addEventListener("click", () => {
  document.write("<h2>⚠️ This was done using document.write()</h2><p>Entire document replaced.</p>");
});


// DOM MANIPULATION

const createElementBtn = document.getElementById("createElementBtn");
const removeElementBtn = document.getElementById("removeElementBtn");
const updateElementBtn = document.getElementById("updateElementBtn");
const manipulateArea = document.getElementById("manipulateArea");

let createdElement = null; // Track element reference

// 1. Create Element
createElementBtn.addEventListener("click", () => {
  if (!createdElement) {
    createdElement = document.createElement("div");
    createdElement.textContent = "🛠️ I was dynamically created!";
    createdElement.style.padding = "10px";
    createdElement.style.backgroundColor = "#d1f7c4";
    createdElement.style.marginTop = "10px";
    manipulateArea.appendChild(createdElement);
  }
});

// 2. Remove Element
removeElementBtn.addEventListener("click", () => {
  if (createdElement && manipulateArea.contains(createdElement)) {
    manipulateArea.removeChild(createdElement);
    createdElement = null;
  }
});

// 3. Update Element
updateElementBtn.addEventListener("click", () => {
  if (createdElement) {
    createdElement.textContent = "🔄 Element updated!";
    createdElement.style.backgroundColor = "#ffeaa7";
    createdElement.style.color = "#2d3436";
  }
});


// WEB STORAGE: Check support
function isStorageSupported(type) {
  try {
    const testKey = "__test__";
    window[type].setItem(testKey, testKey);
    window[type].removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

// SHOW SUPPORT INFO
const storageSupportInfo = document.createElement("p");
storageSupportInfo.textContent =
  "localStorage supported: " + isStorageSupported("localStorage") +
  " | sessionStorage supported: " + isStorageSupported("sessionStorage");
document.body.insertBefore(storageSupportInfo, document.body.firstChild);


// LOCAL STORAGE: Click Counter
const localCounterBtn = document.getElementById("localCounterBtn");
const localCounterDisplay = document.getElementById("localClicks");

function updateLocalCounter() {
  let count = localStorage.getItem("localClicks");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("localClicks", count);
  localCounterDisplay.textContent = count;
}

// Initialize display with stored value on load
localCounterDisplay.textContent = localStorage.getItem("localClicks") || 0;

localCounterBtn.addEventListener("click", updateLocalCounter);


// SESSION STORAGE: Click Counter
const sessionCounterBtn = document.getElementById("sessionCounterBtn");
const sessionCounterDisplay = document.getElementById("sessionClicks");

function updateSessionCounter() {
  let count = sessionStorage.getItem("sessionClicks");
  count = count ? parseInt(count) + 1 : 1;
  sessionStorage.setItem("sessionClicks", count);
  sessionCounterDisplay.textContent = count;
}

// Initialize display with stored value on load
sessionCounterDisplay.textContent = sessionStorage.getItem("sessionClicks") || 0;

sessionCounterBtn.addEventListener("click", updateSessionCounter);


// IMPORT ES6 MODULE FUNCTIONS
import subtract, { add, multiply } from "./mathUtils.js";

// DOM Elements for module calculations
const addBtn = document.getElementById("addBtn");
const multBtn = document.getElementById("multBtn");
const subBtn = document.getElementById("subBtn");
const resultDiv = document.getElementById("moduleResult");

// Read input values and return as numbers
function getValues() {
  const a = parseInt(document.getElementById("valA").value);
  const b = parseInt(document.getElementById("valB").value);
  return [a, b];
}

addBtn.addEventListener("click", () => {
  const [a, b] = getValues();
  resultDiv.textContent = `➕ Add: ${add(a, b)}`;
});

multBtn.addEventListener("click", () => {
  const [a, b] = getValues();
  resultDiv.textContent = `✖️ Multiply: ${multiply(a, b)}`;
});

subBtn.addEventListener("click", () => {
  const [a, b] = getValues();
  resultDiv.textContent = `➖ Subtract: ${subtract(a, b)}`;
});
