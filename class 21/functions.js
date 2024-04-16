// Functions

// - Definition - name, parameters, body

// function printString(){ //- With No Parameters
//     console.log("Hello")
// }

// function printString(str){ //- With Parameters
//     console.log(str)
// }

// printString("Coding Ninjas"); // Calling a function

//str = undefined -> "Coding Ninjas"

// function printString(maxLen, name = "CN", elements=[1,2,3] ){ //- With Default Value 
//     console.log(name, maxLen, elements)
// }

// printString(23); // printString(23, undefined)

// originalString = "This is an example";
// searchTerm = "Example";


function searchString(originalString, search, caseSensitive = false){
    return originalString.toLowerCase().includes(search.toLowerCase())
//     // return found; // true or false
}
// // ExAmpLe

const answer = searchString("This is an example", "this")
console.log(answer)

// Traditional Functions - When we use function keyword
// Arrow - When we use arrow (parameter1) => {}

// const searchString = (a,b,c) => {// - Arrow Function
//     console.log(this)
//     console.log("String is present");
// }

// const a = 100;

// function searchName(){
//     console.log(this)
// }

// Resuable, Modular
// DRY - Don't Repeat Yourself





// searchString();
// IIFE - Immediately Invoked Function Expressions

// Definition , Calling -> 2 Steps
// Combine above steps => IIFE

// (function searchTerm(){
//    console.log("This is IIFE") 
// }())
