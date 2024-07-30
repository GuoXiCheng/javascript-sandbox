// run with: ts-node src/iterators-and-generators/iterator.ts

// #region iterable-protocol
// 没有实现迭代器工厂函数
const obj: any = {};
console.log(obj[Symbol.iterator]); // undefined
const num: any = 123;
console.log(num[Symbol.iterator]); // undefined

// 实现了迭代器工厂函数
const arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // [Function: values]
console.log(arr[Symbol.iterator]()); // Object [Array Iterator] {}
console.log(arr[Symbol.iterator]().next()); // { value: 1, done: false }
// #endregion iterable-protocol

// #region iterator-method
const str = "hello";

// for...of
for (const char of str) {
  console.log(char);
}

// 扩展运算符
console.log(...str); // h e l l o

// 解构赋值
const [first, second, ...rest] = str;
console.log(first, second, rest); // h e [ 'l', 'l', 'o' ]
// #endregion iterator-method

// #region iterator-protocol
const map = new Map();
map.set("name", "John");
map.set("age", 30);

const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next()); // { value: [ 'name', 'John' ], done: false }
console.log(mapIterator.next()); // { value: [ 'age', 30 ], done: false }
console.log(mapIterator.next()); // { value: undefined, done: true }
console.log(mapIterator.next()); // { value: undefined, done: true }
// #endregion iterator-protocol
