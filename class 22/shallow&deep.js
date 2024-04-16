const basicInfo = {
  name: "Kapil",
  city: "Agra",
  address: {
    pincode: 123456,
  },
  age: null,
  skills: ["HTML", "CSS", "JS"],
};

const education = {
  graduationYear: 2016,
  study: "B.Tech (CS)",
  lastUpdatedOn: new Date(),
};
// basicInfo -> mem location => 100
// basicInfo1 -> mem location => 100

// 1) Spread Operator - Partial Deep Copy
// const basicInfo1 = {
//   ...basicInfo,
// };

// 2) Object Assign - Partial Deep Copy
// const basicInfo1 = Object.assign({}, basicInfo);

// 3) JSON.parse(JSON.stringify())
// let basicInfo1 = JSON.stringify(education);
// basicInfo1 = JSON.parse(basicInfo1);
// basicInfo1.skills.push("React");

// 4) structuredClone() - Deep Copy

// 5) Custom Code , using Libraries

// basicInfo1.email = "codingninjas@gmail.com";
// basicInfo1.address.pincode = 987654;
// console.log(typeof education.lastUpdatedOn, typeof basicInfo1.lastUpdatedOn);

// Object -
//   {
//     primitive,
//     primitive,
//   };

// Complex Object -
//   {
//     primitive,
//     primitive,
//  	 nonPrimitive [Object, array, function]
//   };

// Only Talking About Non Primitives
// Shallow -> Only Gets the Ref of memory location
// Partial -> It Copies the object's primitive values
// Deep -> When all the properties are copied by values

// const basicInfo = {
//   name: "Kapil",
//   city: "Agra",
//   address: {
//     pincode: 123456,
//   },
// };

// const basicInfo1 = structuredClone(education);
// basicInfo1.skills.push("React");
// console.log(education, basicInfo1);

// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }
//   if (Array.isArray(obj)) {
//     return [...obj];
//   }

//   const clone = {};
//   Object.keys(obj).forEach((key) => {
//     if (obj[key]) {
//       // obj.name
//       clone[key] =
//         typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
//     }
//   });

//   return clone;
// }

// const basicInfo1 = deepClone(basicInfo);
// basicInfo1.skills.push("React");
// console.log(basicInfo, basicInfo1);

// Question: Write a function to create a deepClone of an object.

// When we copy primitive values, JS copy by value
// When we copy non primitive values, JS copy by ref
// Recursion

function deepClone(baseObject) {
  // Base Condition
  if (baseObject === null || typeof baseObject === "function") {
    return baseObject;
  }
  if (Array.isArray(baseObject)) {
    return [...baseObject];
  }

  // Main Logic
  const clone = {};
  const keys = Object.keys(baseObject);
  console.log(keys);

  keys.forEach((key) => {
    // clone.name = "Name"
    //baseObject.age = null
    if (typeof baseObject[key] === "object") {
      clone[key] = deepClone(baseObject[key]); //{pincode: 12345}, age -> null
    } else {
      clone[key] = baseObject[key];
    }
  });

  return clone;
}

const copy = deepClone(basicInfo);
copy.skills.push("React");
