// Educational Microtask Scheduler
// Demonstrates how microtasks can be scheduled using Promise.resolve()

function createMicrotaskScheduler() {
  const queue = [];
  let isFlushing = false;

  function flush() {
    if (isFlushing) return;

    isFlushing = true;

    // Schedule flushing as a microtask
    Promise.resolve().then(() => {
      while (queue.length) {
        const task = queue.shift();
        task();
      }

      isFlushing = false;
    });
  }

  return function schedule(task) {
    queue.push(task);
    flush();
  };
}


// Usage Example

const schedule = createMicrotaskScheduler();

schedule(() => console.log("Task 1"));
schedule(() => console.log("Task 2"));
schedule(() => console.log("Task 3"));

console.log("Sync done");


/*
Expected Output:
Sync done
Task 1
Task 2
Task 3

Explanation:

- All scheduled tasks are placed into an internal queue.
- flush() schedules execution using Promise.resolve().then(...)
- That makes the flush run as a microtask.
- Microtasks execute after current synchronous code completes.
- Tasks run in order before any macrotask.
*/
