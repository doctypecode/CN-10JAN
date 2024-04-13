// // Data Types -> Primitive & Non Primitive

// // Primitive
// // String - Sequence of chars, Immutable
// let org = "Coding Ninja" + " 123";
// console.log(org);

// // Number,
// let count = 34567890;
// console.log(count);

// // BigInt
// let bigCount = 9007199254740991345678903456789876545n;
// console.log(bigCount);

// // Boolean,
// let boolean = true + "string";
// console.log(boolean);

// // undefined,
// let isAllowed; // let isAllowed = undefined

// if (!isAllowed) {
//   // undefinded, null, 0, false
// } else {
// }

// if (isAllowed) {
// } else {
//   // undefinded, null, 0, false
// }

// // void - When a function is not returning anything
// function callNow() {
//   let flag = true;
//   console.log("Calling...");
//   // logic, flag is being changed

//   if (flag) {
//     return 10 + 23.5; //33.5
//   } else {
//     return [1, 2, 3];
//   }
// }
// const temp = callNow();
// console.log(temp);

// // null,
// let data = null; // data = undefined

// if (data === null) {
//   console.log("Loading data...");
// } else if (!data) {
//   console.log("No data available");
// } else {
//   console.log("Data from Backend");
// }

// // fetch data -- A step somewhere in code
// // data = "Assign data that we got from backend(sever, DB)"

// // Symbol,
// let symbol = Symbol("Coding");
// let symbol1 = Symbol("Coding"); // New Instance of Symbol Class / Function
// console.log(symbol.toString());

// // Non Primitive
// // Object
// // {key:value}
// // [1,2,3,'4']

// // FE
// const payload = { user: "information" };

// const obj1 = {
//   userRole: "admin",
//   payload,
// };

// const arr = [1, 2, 345, "string", { payload }, true, NaN];

// console.log(arr);

// request -> payload

// typeof

// One DT -> Another
// Auto (Coercion)
// Manual (Casting)

const coercion = 123 + "234";
const casting = +"123";
//124
console.log(casting.toString().charCodeAt(0));
