// .toString()
// .toUpperCase()

// function String(str) {
//   this.value = str;
// }

// String.prototype.toUpperCase = function () {
//   // Some logic for uppercase
//   console.log("Uppercase Overwritten");
// };

// String.prototype.toLowerCase = function () {
//   // Some logic for uppercase
// };

// const temp = "Some value";

String.prototype.initials = function () {
  // 1) Name
  // 2) Split using .split()
  // 3) Take the first char of each word

  const wordList = "Kapil Middle    Kumar".split(" ");
  // const firstName =
  console.log(wordList);
};

const temp = "New String";
temp.initials();

// Kapil Middle Kumar -> "KMK" Output

// Some logic can be written for uppercase or lower or substring

const main = "Some random thing";

// const main = new String("Some Random thing");

function String(str) {
  this.toUpperCase = function () {
    // return uppercase string
  };
}

String.prototype.newMethod = function () {};
