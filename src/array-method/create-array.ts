// run with: ts-node src/array-method/create-array.ts
export {};

// #region literal-quantity
const resOfEle = [1, 2, 3, 4, 5]; // 创建包含指定元素的数组

const resOfEmpty = []; // 创建一个空数组
// #endregion literal-quantity

// #region extension-operator
const resOfExt = [1, ...[2, 3, 4], 5]; // [ 1, 2, 3, 4, 5 ]

const resOfExtStr = [..."Array"]; // [ 'A', 'r', 'r', 'a', 'y' ]
// #endregion extension-operator

// #region constructor
const resOfConEle = new Array(1, 2, 3, 4, 5); // 创建包含指定元素的数组

const resOfConEmpty = new Array(5); // 创建一个长度为5的数组，元素都是undefined
// #endregion constructor

// #region array-from-1
const resOfArrFrom = Array.from("Array"); // [ 'A', 'r', 'r', 'a', 'y' ]
// #endregion array-from-1

// #region array-from-2
const resOfArrMap = Array.from(new Map().set(1, 2).set(3, 4)); // [ [ 1, 2 ], [ 3, 4 ] ]

const resOfArrSet = Array.from(new Set([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
// #endregion array-from-2

// #region array-from-3
const resOfArrFromFun = Array.from([1, 2, 3, 4, 5], (x) => x * 2); // [ 2, 4, 6, 8, 10 ]
// #endregion array-from-3

// #region array-of
const resOfArrOf = Array.of(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
// #endregion array-of

console.log(resOfArrFromFun);
