// IIFE (Immediately Invoked Function Expression)

(function () {
  let secret = "hidden";
  console.log("IIFE executed");
})();


// Module Pattern using IIFE + Closure

const CounterModule = (function () {
  let count = 0; // private state

  return {
    inc() {
      count++;
      return count;
    },

    get() {
      return count;
    }
  };
})();

console.log(CounterModule.inc());
console.log(CounterModule.get());


/*
How this works:

1. The function runs immediately.
2. It creates a private variable 'count'.
3. It returns an object (public API).
4. The returned methods close over 'count'.

The outer function is gone,
but the variable remains alive due to closure.
*/
