// run with: ts-node src/array-method/create-array.ts
export {};

let arr;

// #region literal-quantity
arr = [1, 2, 3, 4, 5]; // 创建包含指定元素的数组

arr = []; // 创建一个空数组
// #endregion literal-quantity

// #region extension-operator
arr = [1, ...[2, 3, 4], 5]; // [ 1, 2, 3, 4, 5 ]

arr = [..."Array"]; // [ 'A', 'r', 'r', 'a', 'y' ]
// #endregion extension-operator

// #region constructor
arr = new Array(1, 2, 3, 4, 5); // 创建包含指定元素的数组

arr = new Array(5); // 创建一个长度为5的数组，元素都是undefined
// #endregion constructor

// #region array-from-1
arr = Array.from("Array"); // [ 'A', 'r', 'r', 'a', 'y' ]
// #endregion array-from-1

// #region array-from-2
arr = Array.from(new Map().set(1, 2).set(3, 4)); // [ [ 1, 2 ], [ 3, 4 ] ]

arr = Array.from(new Set([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
// #endregion array-from-2

// #region array-from-3
arr = Array.from([1, 2, 3, 4, 5], (x) => x * 2);
// #endregion array-from-3

// #region array-of
arr = Array.of(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
// #endregion array-of

console.log(arr);
