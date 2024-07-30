// run with: ts-node src/iterators-and-generators/iterator-custom.ts

export {};

// #region custom-iterator
class Counter {
  constructor(private limit: number) {}

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { value: count++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}

const counter = new Counter(3);
for (const num of counter) {
  console.log(num); // 1 2 3
}
// #endregion custom-iterator

// #region early-termination
class Counter2 {
  constructor(private limit: number) {}

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { value: count++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
      return() {
        console.log("Terminating early");
        return { value: undefined, done: true };
      },
    };
  }
}

const counter2 = new Counter2(3);
for (const num of counter2) {
  if (num && num > 2) {
    break;
  }
  console.log(num);
}
// 1
// 2
// Terminating early

// #endregion early-termination
