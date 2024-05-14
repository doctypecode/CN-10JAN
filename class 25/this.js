// 1) window object creation
// 2) window gets assigned to 'this'

// this is present in global context

// const person = {
//   name: "Kapil Kumar",
//   age: 28,
//   greeting: function (name) {
//     // this = person
//     const printGreeting = () => {
//       // No "this" available in this scope
//       console.log(`Hello from ${this.name}, ${this.age}, ${name}`);
//     };
//     printGreeting();
//   },
// };

// DRY - Don't repeat yourself

// person.greeting("Coding Ninjas");

// Regular -> We have 'this' binding
// function assigns person to 'this'
// Arrow -> We don't have 'this' binding
// const firstName = "Kapil";
// const obj = {
//   firstName, // firstName: firstName
// };

// Pre defined
// custom

// this = window
// window.name = name;
// window.age = age;
// Constructor Functions
// function Person(name, age) {
//   // this will not have any value
//   // this -> Person = {} - window
//   console.log(this);
//   this.name = name; // {name: name}
//   this.age = age; // {name, age:age} => {name, age}
//   this.greeting = function () {
//     console.log(`Hello from ${this.name}, ${this.age}`);
//   }; // this = {name, agr, greeting: function()}
//   // return this
// }

// const person = Person("Coding", 28); //{}
// person.name = "Kapil Kumar";
/*
const person = {
	name :name,
	age:age
}
*/
// console.log(person);

// const person2 = new Person("Surya", 28); //{}
// person2.greeting();

function Person(name, city, country) {
  this.name = name;
}
Person.prototype.intro = function () {
  console.log(`Hello, My Name is ${this.name}`);
};

const person = new Person("Coding Ninjas");
const person1 = new Person("CN");

function Address(city, country) {
  // this = {}
  this.city = city;
  this.country = country;
}

Address.prototype.getCity = function (a, b, c, customObject = false) {
  return console.log("This is ", this.city, customObject);
};

Address.prototype.getCountry = function () {
  return console.log("This is country");
};

const address = new Address("Agra", "India");

// Address.prototype.__proto__ = Person.prototype;
// address.__proto__.intro();

Person.prototype.__proto__ = Address.prototype;
person1.__proto__.getCity.call(
  { city: "Agra", country: "India" },
  true,
  10,
  20
);
person1.__proto__.getCountry.call(address);

// // console.log(person);

// // Call, apply, bind

// const [a, b, c, ...d] = [1, 2, 3, 4, 5, 6];
// console.log(d);
// // a = 1
// // b = 2
// // c = 3
// const { city, country } = {
//   city: "Noida",
//   country: "India",
// };

// address.getCity.call(obj, true);

// function Parent(name) {
//   this.name = name;
//   this.printName = function () {
//     console.log("Hello");
//   };
// }
// Parent.prototype.getName = function () {
//   return this.name;
// };
// function Child(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Child.prototype.__proto__ = Parent.prototype;

// var child = new Child("john", 20);
// console.log(child);
