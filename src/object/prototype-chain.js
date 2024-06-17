// run with: node src/object/prototype-chain.js

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");
console.log(alice.greet()); // "Hello, my name is Alice"
console.log(alice.__proto__ === Person.prototype); // true
console.log(alice.__proto__.__proto__ === Object.prototype); // true
console.log(alice.__proto__.__proto__.__proto__); // null
