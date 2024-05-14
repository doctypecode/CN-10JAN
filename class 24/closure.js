// Closure - In JS when we access a variable or a property from the lexical scope (ancestor) wll be stored in the memory.
//  & Curring - Function chaining

function outer() {
  let name = "Coding Ninja";

  const firstName = "Hello";
  return function printName(prefix) {
    console.log(prefix + " " + name);
  };
}

const print = outer()("Mr.");
// let name = ""

// Call Stack - Data Structure, that JS uses to remember what is being executed and where to return after the execution.

// Web APIs -
// Callback Queue - Data Structure, Web APIs will push the events in the queue that are picked up based on the sequence

// JS Engine - All the JS (V8 Engine)

// Web API
// setTimeout
// setInterval
// fetch
// document
// prompt
// alert

// LIFO - Stack
// FIFO - Queue

// setTimeout(() => {
//     setTimeout()
// }, 0)
// console.log("Hello")

// What is JS? - Single Threaded, non blocking async language

// {
//  global Scope - i - 6
//     {
//         B1
//     }
//     {
//         B2
//     }
// }

// In Case Of var
// {
//     Functional Scope - i = 6
//     {
//         i = 1
//     }
//     {
//         i = 2
//     }
//     {
//         i = 3
//     }
//      {
// i = 5
// }
// }

// B1 - i = 1
// B2 - i = 2
// B3 - i = 3
// B4 - i = 4
// B5 - i = 5

// i - 6

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log("You clicked the button!");
//   }, 1000);
// }

// Memory Phase
// i = "no value"

// // Execution
//  - Context
//     i = 1
//     console.log();
//     i = 2
//     console.log();
