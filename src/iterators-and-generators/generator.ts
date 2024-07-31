// run with: ts-node src/iterators-and-generators/generator.ts
export {};

// #region generator-function
// 生成器函数声明
function* generatorFn() {}

// 生成器函数表达式
const generator = function* () {};

// 对象字面量方法的生成器函数
const foo = {
  *generatorFn() {},
};

// 类方法的生成器函数
class Foo {
  *generatorFn() {}
}

// 静态方法的生成器函数
class Bar {
  static *generatorFn() {}
}
// #endregion generator-function

// #region use-generator
function* countTime() {
  yield "one";
  yield "two";
  yield "three";
}

const timeGenerator = countTime();
console.log(timeGenerator.next()); // { value: 'one', done: false }
console.log(timeGenerator.next()); // { value: 'two', done: false }
console.log(timeGenerator.next()); // { value: 'three', done: false }
console.log(timeGenerator.next()); // { value: undefined, done: true }

for (const time of countTime()) {
  console.log(time);
}
// #endregion use-generator
