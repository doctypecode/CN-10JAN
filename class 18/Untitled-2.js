// Scoping
// Set of rules by which JS decides which variable and function is accessible in which part of the code.
// 1) Global
// 2) Local (functional)
// 3) Block
// #) Lexical

// Global - varibale defined outside any function or block gets added to global scope and is assessible from entire code.

// Local - Var
// Block - let & const

// if (true) {
//   // This is a block
// }

// // var - functional
// // let & const - block

// function something() {
//   function oneMore() {
//     var globalVar = "This is in block";
//   }
//   console.log(globalVar);
// }

// something();

// Scoping - global, local, block, lexical

// function something() {
//   if (true) {
//     var greetingVar = "Hello Var!"; // functional
//   }
//   console.log(greetingVar);
// }

// if (true) {
//   let greetingLet = "Hello Let!"; // block
//   const greetingConst = "Hello Const!"; // block
// }

// something();

// console.log(greetingVar);
// console.log(greetingLet);
// console.log(greetingConst);

// Declaration & Assignment
// var - Re-declare and Re-Assign. It will override the previous value in same scope or not in a functional block.

// let - Only Re-Assign in same scope. Can be Re-declare and Re-Assign if present in other scope.

// const - None

// var greetingVar = "Var!";
// var greetingVar = "New Value Var!";
// console.log(greetingVar);

// let greetingLet = "Let!";
// greetingLet = "New Value Let!";
// console.log(greetingLet);

// const greetingConst = "Const!";

// if (true) {
//   const greetingConst = "New Value Const!";
//   console.log(greetingConst);
// }
// console.log(greetingConst);
// console.log(greetingVar);

// Hoisting -
// var - It gets hoisted and defined at the top of its scope