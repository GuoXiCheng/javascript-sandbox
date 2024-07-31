// run with: ts-node src/iterators-and-generators/generator-terminate.ts
export {};

// #region generator-return
function* generatorFn() {
  yield* [1, 2, 3];
}

const generator = generatorFn();
console.log(generator.next()); // { value: 1, done: false }
generator.return();
console.log(generator.next()); // { value: undefined, done: true }
// #endregion generator-return

// #region generator-throw
function* generatorFn2() {
  yield* [1, 2, 3];
}

const generator2 = generatorFn2();

try {
  generator2.throw("An error occurred");
} catch (error) {
  console.log(error); // An error occurred
}
console.log(generator2.next()); // { value: undefined, done: true }
// #endregion generator-throw

// #region generator-throw-catch
function* generatorFn3() {
  for (const x of [1, 2, 3]) {
    try {
      yield x;
    } catch (error) {
      console.log(error);
    }
  }
}

const generator3 = generatorFn3();
console.log(generator3.next().value); // 1
generator3.throw("An error occurred");
console.log(generator3.next().value); // 3
// #endregion generator-throw-catch
