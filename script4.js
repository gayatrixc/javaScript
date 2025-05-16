console.log("========= Asynchronous JavaScript =========");

// 1. Synchronous vs Asynchronous
console.log("\n1. Synchronous vs Asynchronous");

console.log("Synchronous Start");
function syncTask() {
  console.log("Task 1 (Sync)");
}
syncTask();
console.log("Synchronous End");

console.log("\nAsynchronous Start");
function asyncTask() {
  setTimeout(() => {
    console.log("Task 2 (Async after 2s)");
  }, 2000);
}
asyncTask();
console.log("Asynchronous End (but async runs in background)");


// 2. setTimeout Function
console.log("\n2. setTimeout Function");
setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);


// 3. Callbacks
console.log("\n3. Callbacks");

function doHomework(subject, callback) {
  console.log(`Starting homework on ${subject}`);
  callback();
}

doHomework("JavaScript", () => {
  console.log("Finished homework!");
});


// 4. Promises
console.log("\n4. Promises");

function fetchData() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Fetching failed!");
      }
    }, 1500);
  });
}

fetchData()
  .then(response => console.log("Promise Success:", response))
  .catch(error => console.log("Promise Error:", error));


// 5. Async / Await
console.log("\n5. Async / Await");

async function loadData() {
  try {
    const data = await fetchData();
    console.log("Async/Await Result:", data);
  } catch (err) {
    console.error("Async/Await Error:", err);
  }
}
loadData();


// 6. JSON File Explanation
console.log("\n6. JSON Explanation (see data in separate files)");
fetch('data1.json')
  .then(res => res.json())
  .then(data => console.log("JSON File 1:", data));

fetch('data2.json')
  .then(res => res.json())
  .then(data => console.log("JSON File 2:", data));

fetch('data3.json')
  .then(res => res.json())
  .then(data => console.log("JSON File 3:", data));


// 7. Fetch API with PokeAPI
console.log("\n7. Fetch API with PokeAPI");

async function getPokemonData(pokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    console.log(`Pokemon: ${data.name.toUpperCase()}`);
    console.log("Abilities:", data.abilities.map(a => a.ability.name).join(", "));
    console.log("Height:", data.height);
    console.log("Weight:", data.weight);
  } catch (err) {
    console.error("Error fetching from PokeAPI:", err);
  }
}

getPokemonData("pikachu");
