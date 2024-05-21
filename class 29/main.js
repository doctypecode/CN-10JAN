// setTimeout(callback, timer)
// timer - is in milliseconds
// Once the timer is completed then the callback function will be  executed

// console.log("First line of code"); // -> Call Stack -> Executed

// setTimeout(() => {
//   // -> Call Stack -> Web API -> Callback Queue -> Call Stack (only the callback function) -> Executed
//   console.log("Hello from callback!!");
// }, 1000);

// -> Call Stack -> Executed

// console.log("Last line of code");

// setTimeout -> Web APIs

// Browser
//SetTimeout
//setInterval
//fetch
//document
//window

// Node.js
// setTimeout
// setInterval
// global

// Show alert if user stops typing... debouncing

// typeahead input field

// setTimeout(() => {}, 1000);

// let id;

// function handleSearch(event) {
//   if (id) {
//     clearTimeout(id);
//   }
//   id = setTimeout(() => {
//     // Make API call
//     console.log("Make API Calls", event.target.value);
//   }, 2000);
//   console.log(id);
// }

// let count = 0;

// let id;
// id = setInterval(() => {
//   if (count === 10) {
//     clearInterval(id);
//   }
//   count++;
//   console.log("Hello");
// }, 1000);

const counterEl = document.getElementById("counter");
const timeInputEl = document.getElementById("timeInput");
let count = 0;
let intervalId = 0;

function handleTimeInputChange(event) {
  count = event.target.value * 60;
  updateCounterUI();
}

function updateCounterUI() {
  counterEl.innerText = count + "s";
}

function handleStart() {
  timeInputEl.style.display = "none";
  intervalId = setInterval(() => {
    if (count === 0) {
      handleReset();
      alert("Time is over!");
    } else {
      count -= 1;
      updateCounterUI();
    }
  }, 1000);
}

// In Mem, id -> interval is running after 1s
// The interval id will be returned back to intervalId variable
// TO clear/ remove the interval from the memory we use clearInterval Function

function handlePause() {
  clearInterval(intervalId);
}

function handleReset() {
  clearInterval(intervalId);
  count = timeInputEl.value * 60;
  updateCounterUI();
  timeInputEl.style.display = "block";
}

// After every 40sec call API - Polling (Short & Long)
// Single Sign ON - Drive, photos, youtube, cal, gmail
// Chrome Extension - No login page
// Web Application

// Publisher Subscriber, Kafka - Event Driven System
