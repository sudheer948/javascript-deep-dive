// Microtask Inside a Macrotask

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside timeout");
  });
}, 0);

/*
Execution Order:

1. setTimeout callback enters Macrotask Queue.
2. When executed, it logs "Timeout 1".
3. Inside that macrotask, a microtask is scheduled.
4. Before the next macrotask runs,
   the engine drains all microtasks.

Expected Output:
Timeout 1
Promise inside timeout

Key Insight:
After each macrotask completes,
all microtasks are drained before continuing.
*/
