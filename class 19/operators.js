// Arithmetic - (+,-,*,/,%,**)
// Comparision - (==,===,<=,>=,!=, !==)
// Assignment - (=, +=, -=, *=, /=)
// Logical - (&&, ||, !)
// Ternary - (condition ? expr1 : expr2)
// Inc / Dec - (++, --)
// Unary - (+, -, typeof)

// let count = 1;
// // let num = ++count; // count + 1;
// //

// let num = count++;

// // let num = count;
// // count = count + 1;

// let num1 = ++count;

// // count = count + 1;
// // let num1 = count;
// console.log(num, count);

// let posString = -"123456";
// let negNum = +posString;
// console.log(typeof negNum);

const str = "coDing ninjas";
console.log(str.includes("con"));

function level1() {
  // Not Accessible
  function level2() {
    // Not Accessible
    function level3() {
      // Let Not Accessible
      // Var Accessible
      if (true) {
        let newLet = "";
        var newVar = 123;
      }
      function level4() {
        // Accessible
      }
    }
  }
}
