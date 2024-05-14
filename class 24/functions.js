// function (name){ - Unnamed
//     // Argument Object
//     console.log(arguments, name)
// }
// function printName(name) {
//   //- Named Functions
//   // Argument Object
//   console.log(arguments, name);
// }

// const printFullName = () => {
//   // No Argument Object is created by JS
//   console.log("Kapil");
// };

// functions - First Class Objects [It can be returned, It can be passed as an argument, it will be hoisted]

// Web API

// document.getElementById("inc").addEventListener("click", () => {
//   incrementCount(sendNotificationToUser("Coding"));

//  incrementCount(function(){
//     alert("Update "+name)
// })
// });

// function sendNotificationToUser(name) {
//   return function () {
//     alert("Update " + name);
//   };
// }

//  const sum = () => {}
//  function sum(){}
// let count = 0;

// const incrementCount = (someRandomFunction) => {
//   count++;
//   if (count === 2) {
//     someRandomFunction(); // printFullName()
//   }
//   console.log(count);
// };

// const sum = (a, b) => console.log("Arrow Function", a)

// sum(10);

// incrementCount [parameter - sendNotificationToUser] - someRandomFunction - someRandomFunction()

// 16 -> 29 -> 32 -> 21

// Client -> Server

// Client -> Machine 2

// machine 1 - Server 1

// machine 2 -> machine 1

// Origin 1 -> Origin 2

// WhiteList -> []

// Pure - For same input, pure functions generate same output;
// Impure - Output depends on external variables

// let count = 1;

// function sum(a, b) {
//   return (a + b) * count;
// }

// function dateFormat(dateObject){
// return Formatted Date
// }

// Date Filter, - Page 1 dd/mm/yy
// Date Filter, - Page 2
// Date Filter, - Page 3

// console.log(sum(2, 2)); // 4
// console.log(sum(2, 2)); // 4
// count++;
// console.log(sum(2, 2)); // 8
// console.log(sum(2, 2)); // 8
// console.log(sum(2, 2)); // 8
// console.log(sum(2, 3)); // 10
