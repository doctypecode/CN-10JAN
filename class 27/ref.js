// JSON - Javascript Object Notation

// Single Object
// {
//     key: value
// }

// // List of objects
// [
//     {
//         key: value
//     }
// ]

// // JSON String
// JSON.stringify([
//     {
//         key: value
//     }
// ])
// "[{"key": "value"}]"


// "Coding\"_\" " + "Ninjas"

// '['1','2','3']'
// console.log(JSON.parse('["1","2","3"]'));

// localstorage

// const data = {
//     key1: 'somedata here',
//     key2: 'somedata here',
// }

// localStorage.setItem('data3', JSON.stringify(data))
// const jsonString = localStorage.getItem('data3')
// console.log(jsonString)

// API  - Application Programming Interface
// Something that enables us to interact with the program, set of methods that helps us to write code

// Web API - document
// selection - document.getElementById(), document.querySelector('#-ids, .-classes, tagName')
// changes
// deletion

// document.getElementById() - single element
// document.getElementsByClassname() - [list of elements]
// document.getElementsByTagName() - []

// We want to change the color of button
// JS is offering a set of protocols/ pre defined methods that you can use to complete requirement

// Web - 

// document.getElementById('').style.background = 'red'

// Web API - document, setTimeout, setInterval, fetch, alert, prompt, console

// que
// Math.random()

// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.1))
// console.log(Math.round(3.4))
// console.log(Math.round(Math.random() * (max - min) + min)) // 0 - 1
// console.log(Math.floor(Math.random() * (4 - 0) + 0)) // 0 - 1
// console.log(Math.floor(Math.random() * (3 - 0) + 0)) // 0 - 1
// 0 - 4
// 0 - 3
// 0 - 2
// 0 - 1
// 1
// 2

// [1,2,3,4]

// [    3]

// [ 4, 3, 2, 1] 
// [3,4,2,1]
// [0,1,2,3] - Index

// arr = [
//     "Question1",
//     "Question2",
//     "Question3",
//     "Question4",
//     "Question5"
//   ];

// result = [
//     "Question1", //0
//     "Question2", // 1
//     "Question3", // 2
//     "Question4", //3
//     "Question5" //4
//   ];

//   i = 4
//   const index = Math.floor(Math.random() * i); // 2


// const temp = result[i];
// result[i] = result[index];
// result[index] = temp;

// result = [
//     "Question1", //0
//     "Question2", // 1
//     "Question5", // 2
//     "Question4", //3
// // Till this index value

//     "Question3" //4
//   ];



// const customMap = function(arr, callbackFn){
//     const newArray = [];
//     for(let i = 0; i<arr.length;i++){
//         newArray.push(callbackFn(arr[i]))
//     }
//     return newArray;
// }


// console.log(customMap([1,2,3,4,5], (num) => {
//     return num**num
// }))

// console.log([1,2,3,4,5].map((num, index, arr) => {
    
// }))


//create you curried function here with name pizzaPricing.
// const pizzaSizeChart = {
//     small: 8.00,
//     medium: 10.00,
//     large: 12.00,
// }


// function pizzaPricing(pizzaSize){
//     const basePrice = pizzaSizeChart[pizzaSize];
//     return function(toppings){
//         const cost = toppings.length * 1.50 // 1.50 * 2
//         return (basePrice + cost).toFixed(2);
//     }
// }

// const pizza = pizzaPricing("large")
// console.log(pizza(['bacon','chees']))


// function pizzaPricing(size) { const basePrice = { small: 8.0, medium: 10.0, large: 12.0, }; return function (selectedToppings) { return function (quantity) { const toppingsCost = selectedToppings.length * 1.5; const totalPrice = basePrice[size] + toppingsCost; return (totalPrice * quantity).toFixed(2); }; }; }




// client -> server -> new page (client)


// document.getElementById().addEventListener('click', (event) => {
    // event.preventDefault() // stop the default behavior
    // Form Validation

// })

// Quiz App, __proto vs prototypes, previous lecture question