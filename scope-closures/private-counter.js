// Closure — Private State Pattern

function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      return count;
    },

    decrement() {
      count--;
      return count;
    },

    get() {
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.get());       // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1


/*
Key Insight:
Even after createCounter() finishes execution,
the returned methods retain access to 'count'.

Closures capture variable bindings, not snapshots.
*/


/*
Object Method Shorthand (ES6)

increment() {
  count++;
}

is equivalent to:

increment: function () {
  count++;
}

Both create normal functions.
Arrow functions are not ideal for object methods
because they do not have their own 'this'.
*/
