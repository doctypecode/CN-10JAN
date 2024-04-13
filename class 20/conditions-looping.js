// if, if-else, if-elseif-else

const num = 11;
if (num <= 10) {
  // If condition is true, then this code block will be executed
  if (num == 10) {
    console.log("Equal");
  } else {
    if (num * 2 == 10) {
      console.log("Half");
    }
    console.log("Lower");
  }
} else {
  console.log("Higher");
}

// if (true) {
//   if (true) {
//     if (false) {
//     } else {
//       if (true) {
//         console.log("Here");
//       }
//     }
//   }
// }

// if (num == 10) {
//   console.log("Equal");
// } else if (num < 10) {
//   console.log("Lower");
// } else if (num > 10) {
//   console.log();
// } else {

// }

// for - for(initialize;condition;iterator){}
// 1 - initialization
// 2 - condition
// 3 - code execution
// 4 - iteration (inc / dec)

// start - 1 - 2 - 3 - 4 - 2 - 3 - 4 - 2 - end
const ary = ["A", "B", "C", "D"];
// Check if array has C;
for (let i = 0; i < ary.length; i++) {
  let digit = ary[i];
  if (digit === "C") {
    console.log("index", i);
    break;
  }
}

let i = 0;
let letter;
while (letter != "C") {
  letter = ary[i];
  i++;
}

if (letter === "C") {
  console.log(i - 1);
}

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }

// while
// do while -

// i, index, idx, itr
let idx = 10;
do {
  console.log(idx);
  idx++;
} while (idx > 20);

// for, while, do while

const first = [1, 2, 3][0];

// [1,2,3].forEach(item => {

// })

// HOF - forEach, map, find, reduce, filter
