# Event Loop — Core Mental Model

JavaScript is single-threaded.
Only one thing runs at a time on the Call Stack.

---

## The 4 Moving Parts

1. Call Stack
2. Web APIs (runtime environment)
3. Microtask Queue
4. Macrotask Queue
5. Event Loop (coordinator)

---

## Call Stack

- Executes synchronous code line by line.
- If the stack is busy, nothing else runs.

---

## Macrotask Queue

Examples:
- setTimeout
- setInterval
- setImmediate (Node)

Macrotasks run only after:
- Call Stack is empty
- All microtasks are completed

---

## Microtask Queue

Examples:
- Promise.then / catch / finally
- async/await continuation
- queueMicrotask

Microtasks have higher priority than macrotasks.

---

## Ordering Rules

1. Run all synchronous code.
2. Empty microtask queue completely.
3. Run ONE macrotask.
4. After that macrotask → empty microtasks again.
5. Repeat.

---

## Golden Rule

Microtasks always run before the next macrotask.

---

## Microtask Draining Behavior

Microtasks are always drained completely
before the engine proceeds to the next macrotask.

### Nested Microtasks

When a microtask schedules another microtask,
the engine continues draining until the queue is empty.

### Microtask Inside Macrotask

After a macrotask finishes executing,
the engine immediately drains the microtask queue
before moving to the next macrotask.
