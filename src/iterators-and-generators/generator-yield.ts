// run with: ts-node src/iterators-and-generators/generator-yield.ts
export {};

// #region generator-as-iterator
function* generatorFn1() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

// generatorFn1 等价于 generatorFn2

function* generatorFn2() {
  yield* [1, 2, 3];
}
// #endregion generator-as-iterator

// #region generator-implement-recursion
function* nTimes(n: number): Generator<number, void, void> {
  if (n > 0) {
    yield* nTimes(n - 1);
    yield n;
  }
}

for (const num of nTimes(5)) {
  console.log(num);
}
// #endregion generator-implement-recursion

// #region generator-as-default-iterator
class Foo {
  private values: number[];
  constructor() {
    this.values = [1, 2, 3];
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
}

const foo = new Foo();
for (const num of foo) {
  console.log(num);
}
// #endregion generator-as-default-iterator
