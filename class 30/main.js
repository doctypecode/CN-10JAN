// Promises - Performing a task in a wrapper that either returns the data or error

// function makeAPICall(saveData, showError) {
//   for (let i = 0; i < 100000000; i++) {}
//   const flag = false; //  fetching data from server
//   if (flag) {
//     saveData("Promise Resolved");
//   } else {
//     showError("Promise Rejected");
//   }
// }

// function saveData() {}

// function showError() {}

// makeAPICall(saveData, showError);

// function fetch() {
// return new Promise((resolve, reject) => {
// 	// Make API Call
// 	resolve();
// })
// }
// API.js
// function getUserData(id){
// 	return new Promise()
// }

// UserPage.js

// getUserData(1).then()

// Call Stack -> Executed or Web API
// Web API -> Queues -> Call Stack -> Executed

// 1) Macro Task - setInterval, setTimeout
// 2) Micro Task - promise

// console.log(promise); // pending, fulfilled, rejected

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final Block");
//   });

// let loading = true;
// fetch("/url")
//   .then((res) => res)
//   .catch((error) => error)
//   .finally(() => (loading = false));

// function fetch(url){
// 	const xhr = new XMLHttpRequest('GET', url);

// 	xhr.onload = function(){
// 		return {
// 			data,
// 			type:'data'
// 		}
// 	}

// 	xhr.onerror = function(){
// 		return {
// 			error,
// 			type:'error'
// 		}
// 	}

// 	xhr.send();
// }

// const res = fetch('/url')

// if(res.type === 'data'){
// 	// Save the data and render the UI
// } else {
// 	// Show the error
// }

// const promise = new Promise((resolve, reject) => {})
// return  new Promise((resolve, reject) => {})
// const res = await new Promise((resolve, reject) => {})

// function wait() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("D");
//       resolve("Data");
//     }, 2000);
//   });
// }

// async function executeSetTimeout() {
//   console.log("A");
//   try {
//     const data = await wait();
//     console.log("B");
//   } catch {
//     console.log("C");
//   }
// }

// executeSetTimeout();
// console.log("E");

// A, E, after 2sec D, B

// 104e -> 101e -> 92e -> 101(wait) -> 102 -> 106

// api.js

// async function getPostData() {
//   const posts = fetch("url");
//   posts.body;
// }

function getData(dataid, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataid);
      resolve("success");
      reject("error");
    }, 7000);
  });
}

async function fetchData() {
  const data = await getData(123);
  const nextData = await getNextData();
}
