// Nested Microtasks Example

console.log("1");

Promise.resolve().then(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
});

console.log("4");

/*
Expected Output:
1
4
2
3

Explanation:

1 and 4 run synchronously on the Call Stack.

Then microtasks begin draining:
- First .then logs "2"
- Inside it, another microtask is added
- Microtasks must drain completely
- So "3" runs before any macrotask

Key Insight:
When microtask execution starts,
the engine drains the microtask queue fully
before moving to any macrotask.
*/
