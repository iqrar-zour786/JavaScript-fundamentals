"use strict";



// OBJECT LITERALS

// Object.create

const mySymbol = Symbol("key1");

const jsUser = {
  name: "Iqrar",
  "full name": "Iqrar Zour",
  [mySymbol]: "key1",
  age: 20,
  location: "makli",
  email: "zour@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};
// console.log(typeof jsUser);

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

// jsUser.email = "zoursahab@gmail.com";
// Object.freeze(jsUser);
// console.log(jsUser);
// jsUser.age = 30;
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
console.log(typeof jsUser);
