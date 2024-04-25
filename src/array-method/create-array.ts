// run with: ts-node src/array-method/create-array.ts

// #region literal-quantity
const arr1 = [1, 2, 3, 4, 5]; // 创建包含指定元素的数组

const arr2 = []; // 创建一个空数组
// #endregion literal-quantity

// #region extension-operator
const arr3 = [1, ...[2, 3, 4], 5]; // [ 1, 2, 3, 4, 5 ]

const arr4 = [..."Array"]; // [ 'A', 'r', 'r', 'a', 'y' ]
// #endregion extension-operator

// #region constructor
const arr5 = new Array(1, 2, 3, 4, 5); // 创建包含指定元素的数组

const arr6 = new Array(5); // 创建一个长度为5的数组，元素都是undefined
// #endregion constructor

// #region Array.from-1
const arr7 = Array.from("Array"); // [ 'A', 'r', 'r', 'a', 'y' ]
// #endregion Array.from-1

// #region Array.from-2
const arr8 = Array.from(new Map().set(1, 2).set(3, 4)); // [ [ 1, 2 ], [ 3, 4 ] ]

const arr9 = Array.from(new Set([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
// #endregion Array.from-2

// #region Array.from-3
const arr10 = Array.from([1, 2, 3, 4, 5], (x) => x * 2);
// #endregion Array.from-3

// #region Array.of
const arr11 = Array.of(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
// #endregion Array.of
