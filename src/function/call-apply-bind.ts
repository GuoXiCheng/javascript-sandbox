// run with: ts-node src/function/call-apply-bind.ts
export {};

// #region Person
class Person {
  name = "Anonymous";
  showDetails(age: number, interest: string) {
    return `${this.name} is ${age} years old and interested in ${interest}.`;
  }
}
// #endregion Person

// #region call
const alice = { name: "Alice" };

const resOfCall = Person.prototype.showDetails.call(alice, 25, "JavaScript");
console.log(resOfCall); // Alice is 25 years old and interested in JavaScript.
// #endregion call

// #region apply
const tom = { name: "Tom" };

const resOfApply = Person.prototype.showDetails.apply(tom, [18, "Java"]);
console.log(resOfApply); // Tom is 18 years old and interested in Java.
// #endregion apply

// #region bind
const bob = { name: "Bob" };

const showDetails = Person.prototype.showDetails.bind(bob);

const resOfBind = showDetails(30, "TypeScript");
console.log(resOfBind); // Bob is 30 years old and interested in TypeScript.
// #endregion bind
