// run with: ts-node src/promise/test.ts

import { MyPromise } from ".";

// #region basic
const basicPromise = new MyPromise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("Basic Success") : reject("Basic Error");
});

basicPromise.then(
  (value) => console.log(value),
  (reason) => console.log(reason)
);
// #endregion basic

// #region async
const asyncPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve("Async Success") : reject("Async Error");
  }, 1000);
});

asyncPromise.then(
  (value) => console.log(value),
  (reason) => console.log(reason)
);
// #endregion async

// #region chaining
const chainingPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Chaining Success");
  }, 1000);
});

chainingPromise
  .then((value) => {
    console.log(value);
    return "Chaining Success 2";
  })
  .then((value) => console.log(value));
// #endregion chaining

// #region promise-all
const promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Success");
  }, 1000);
});

const promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Success");
  }, 2000);
});

MyPromise.all([promise1, promise2]).then((values) => console.log(values));

const promise3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 Error");
  }, 3000);
});

MyPromise.all([promise1, promise3]).then(
  (values) => console.log(values),
  (reason) => console.log(reason)
);
// #endregion promise-all
