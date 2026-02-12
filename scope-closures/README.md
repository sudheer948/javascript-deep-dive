# Scope & Closures — Core Foundations

## Lexical Scope

JavaScript uses lexical (static) scoping.

A function can access variables defined in the scope
where it was written — not where it is called.

Inner functions can access outer variables.
Outer scopes cannot access inner variables.

---

## Closures

A closure is created when a function retains access
to variables from its lexical environment
even after the outer function has finished execution.

Closures capture variable bindings, not values.

---

## Private State Pattern

Closures are commonly used to create private variables.

Example: `createCounter()`

The variable `count`:
- Is not accessible directly
- Remains alive after function execution
- Can only be modified via exposed methods

This pattern enables data encapsulation.

---

## Object Method Shorthand

ES6 allows method definitions inside objects:

increment() {
count++;
}


Equivalent to:



increment: function () {
count++;
}


Arrow functions are not recommended for object methods
when `this` binding matters.

---

## IIFE & Module Pattern

An IIFE (Immediately Invoked Function Expression)
executes immediately after being defined.

Combined with closures, it can simulate private modules:

- Private state inside the function
- Public API returned as an object

This pattern was widely used before ES Modules.
