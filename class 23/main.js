// Call Stack
// What is Stack? - Data Structure - LIFO
// - Array, Object
// values - [1,2,3,4,5,6]
// mem loc - [100,101,102]

// f2();
// f3();

// Hoisting - Moving the declartions to the top of the scope (Variables & Function [var, let, const, functions])

// TDZ -
// Hoisting - In case of let & const only defining the variable takes place. No Initialization
// let org; // Not Initialized
// Line 1
let org = "Coding Ninjas";
function f1() {
  console.log(org, "F1");
  f2();
}

function f2() {
  console.log("f2");
  f3();
}

function f3() {
  console.log("f3");
  // f1();
}

f1();
// console.log(org);
// --- TDZ Ends Here ---
// let org = "Coding Ninjas"; // Till the line where we explicaitly assign value to the variable

// Global, Local/Functional, Block, Lexical

// Context - Relavant info about a process
// - Is it done
