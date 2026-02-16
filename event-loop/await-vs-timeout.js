// await vs setTimeout Example

async function testAwait() {
  console.log("Before await");

  await Promise.resolve();

  console.log("After await");
}

console.log("Start");

testAwait();

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

/*
Expected Output:
Start
Before await
End
After await
Timeout

Explanation:

1. "Start" → synchronous
2. testAwait() runs → logs "Before await"
3. await pauses function
4. Continuation after await is scheduled as a microtask
5. setTimeout callback is scheduled as a macrotask
6. "End" → synchronous
7. Microtasks run → "After await"
8. Then macrotask runs → "Timeout"

Key Insight:
await continuation behaves like Promise.then.
It is scheduled in the microtask queue.
*/
