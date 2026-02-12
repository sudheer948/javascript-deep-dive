// Lexical Scope Example

function outer() {
  let message = "Hello from outer scope";

  function inner() {
    // inner has access to message due to lexical scope
    console.log(message);
  }

  inner();
}

outer(); // "Hello from outer scope"


// Reverse access does NOT work

function outer2() {
  function inner2() {
    let secret = "hidden";
  }

  // console.log(secret); // ❌ ReferenceError
}

// Lexical scope means:
// A function can access variables defined where it was created.
