// Start -------Process of Running a Program/Code---------- End
//  Execution Context
// 2 Phase
// 1) Memory Creation Phase(CP)
// 2) Execution Phase (EP)

// 1) Memory Creation Phase(CP)
// 	- window (only global execution context)
// 	- this object
// 	- Variables & Functions declaration
// 	- Lexical Scoping Environment Creation
// 	- Hoisting
//  - Creation of Argument Object (Only for Local Exection)

// Top of the scope
/*


			TDZ - When varibale is defined but not initialized


*/
// This is where value is assgined to let or const variable

// Global Execution Context - window, this = window
var a = 10;
var b = 20;

function multiply(num1, num2) {
  // Local Execution Context - this = some relavant value will be assigned
  let result = num1 * num2;
  return result;
}

const ans = multiply(a, b);
console.log(ans);

// Execution Context
// - Creation Phase
// - Execution Phase

// Variable Environment

// =====Memory Creation Phase======
// let  a = "no value available";
// let b = "no value available";
// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }
// const ans = "no value available";
// =============Execution Phase==========
// a = 10;
// b = 20;
// =====Memory Creation Phase======
// num1 =  "no value available";
// num2 = "no value available";
// let result = "no value available";
// Ref of all the ancestor scope - (operator)
// Argument{
// 	num1 : , num2:
// }

// =============Execution Phase==========
// num1 = 10;
// num2 = 20;
// result = 200;
// ans = 200
// log the value 200
