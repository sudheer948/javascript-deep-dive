// queueMicrotask Example

console.log("Start");

queueMicrotask(() => {
  console.log("Microtask");
});

setTimeout(() => {
  console.log("Macrotask");
}, 0);

console.log("End");

/*
Expected Output:
Start
End
Microtask
Macrotask

Explanation:

- queueMicrotask schedules a function in the microtask queue.
- Microtasks always run before macrotasks.
- setTimeout schedules a macrotask.
*/
