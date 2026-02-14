// Classic Event Loop Ordering Example

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Expected Output:
Start
End
Promise
Timeout

Execution Flow:

1. "Start" → synchronous → runs immediately.
2. setTimeout → sent to Web API → callback placed in Macrotask Queue.
3. Promise.then → placed in Microtask Queue.
4. "End" → synchronous → runs immediately.
5. Call Stack becomes empty.
6. Drain all microtasks → "Promise".
7. Execute one macrotask → "Timeout".
*/
