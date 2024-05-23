import { init as stockListInit } from "./components/stockList.js";
import { init as detailsInit } from "./components/details.js";
import { init as chartInit } from "./components/chart.js";

stockListInit();
detailsInit();
chartInit();

// # Event Bubbling
// - When we trigger an event on any element it will keep bubbling up till the root of the document. Here bubbling up refres to triggering the event

// data-*
// data-tooltip
//  data-some-random-name - elememt.dataset.someRandomName

// How events work?

// eventListener - Listens the emitted event
// eventDispatch - When we click, event gets emitted. What event? (click event gets emitted)

// const event = new CustomEvent("thisIsMyCustomEvent", {
//   detail: {
// 		a : 1
// 	}
// });

// document.addEventListener("thisIsMyCustomEvent", function (event) {
//   console.log("Event Captured!!!", event.detail);
// });

// document.addEventListener("click", function (event) {
//   console.log("Event Captured!!!", event.detail);
// });
// How Do I dispatch a click event? By Clicking on the element where its added
// How Do I dispatch my custom event? By dispatching it from the element where its added.

// setTimeout(() => {
//   document.dispatchEvent(event);
// }, 2000);
