// Array - Any type of data can be added. Same array can have multiple data types

// Array.length

// Push - Adding Element to the end of the array
const numbers = [1,2,3];
// const numbers1 = Array.from(numbers); 
const numbersLength = numbers.length
numbers.push(5);
numbers.push(2); // [1,2]
numbers.push(8); // [1,2]
numbers.push(7)

// Pop - Remove the element from the end of the array
const lastValue = numbers.pop(); //  Removed 6
// console.log(lastValue)

// Sort
numbers.sort((a,b) => {
    // console.log(a, b, b - a )
    return b - a
});

// Reverse
numbers.reverse();


// Copy & Cut - ctrl + c & Ctrl + X
// Cut -> Remove & Copy to Clipboard
// Copy -> Copy to Clipboard, does not remove the value from its original place

// Slice - Copy
// [1,2,2,3,5,8]
// [0,1,2,3,4,5] - index
// const sliceNumbers = numbers.slice(4) // Array.slice(startIndex, endIndex)
// console.log(sliceNumbers)

// [1,2,2,3,5,8]
// Splice - Cut
// const spliceNumbers = numbers.splice(2,2) // Array.splice(index, count)
// console.log(spliceNumbers)

// "This is an example"


// forEach - Iterate over each element & doesn't return anything

// const double = [];

// Array.prototype.forEach = function(){
//     // For Each Code logic
//     // return undefined
// }

// Array.prototype.map = function(){
//     // Map Code logic
//     return []
// }

// let sum = 0;

// numbers.forEach((n, index, arr) => {
//     sum = sum + n; // 
// })

// console.log(sum)

// console.log(forEachReturn, double)

// function func(){
//     // Do Something

//     // return undefined
// }


// map - Iterate over each element & returns a new array 
// const mapReturn = numbers.map((n, index, arr) => {
//    return n*2;
// })

// index, n, return value
// 0, 1, 1*2 => 2 [2]
// 1, 2, 2*2 => 4 [2, 4]
// 2, 2, 2*2 => 4 [2,4,4]
// 3, 3, 3*2 => 6 [2,4,4,6]

// [1,2,2,3,5,8]----------------- [2,4,4,6,10,16] => new Array will be returned


// console.log(mapReturn)


//filter

// 10 % 2 => 0 -- % (MOD) gives the remainder

// const filteredArray = numbers.filter((num) => {
//     return num % 2 === 0
// })

// console.log(filteredArray)

// const findReturn = numbers.find((num, index, arr) => {
//     return num % 2 === 0
// })

// console.log(findReturn)


// forEach, map, filter, find => .func(callbackFunction)


// find, 

// reduce
// const reduceReturn = numbers.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue;
// }, 0)

// console.log(reduceReturn)




// Unshift - Add to the starting of the array
// numbers.unshift(0);

// Shift - Removes from the start of the array
// numbers.shift();
// numbers.shift();

// indexOf


console.log(numbers)
console.log(numbers.indexOf(8))

// concat
const num2 = ["Coding", 'Ninjas', 'Coding', "Platform"];
const added = numbers.concat(num2);
// num2.push(12345)
console.log(added)

console.log(num2.join("::"))

