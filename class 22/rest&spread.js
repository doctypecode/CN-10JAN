// Spread & Rest
// ... ...
// const arr = [5, 6, 7];
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, ...arr]; // [...[1,2,3]] => [1,2,3]
// const obj = { b: 1 };
// const obj1 = {
//   a: 1,
// };

// const obj2 = { ...obj1, ...obj };
// obj2 = {a : 1, b:1 }

// console.log(arr2, obj2);

// Spread -> When we spread values of JS Object (Array, Object) -> Single Values
// Rest -> Coombining individual values to an Array

// [] -> Spread -> single values - 2015
// single values -> Rest -> [] - 2015

// function maxFunction(...numbers) {
//   console.log(numbers); [20,30,40,10,50]
// }

// const max = Math.min(20, 30, 40, 10, 50);
// console.log(maxFunction(20, 30, 40, 10, 50));

// const obj2 = { ...obj1, ...obj };
// const obj2 = {...obj};
//
// const obj2 = Object.create({});

const basicInfo = {
  name: "Kapil",
  city: "Agra",
};

const education = {
  graduationYear: 2016,
  study: "B.Tech (CS)",
};

// const info = {
//   ...basicInfo,
//   // name: "Kapil",
//   // city: "Agra",
//   ...education,
//   // graduationYear: 2016,
//   // study: "B.Tech (CS)",
// };

// function assignMock(target = {}, ...source) {
//   // target = {}
//   [];
// }

// const info = Object.assign({ age: null }, basicInfo, education); // 1 Argument
const info = Object.assign({
  location: "Agra",
});

console.log(info);
