// run with: ts-node src/array-method/flatten-array.ts

export {};

// #region flat
const arr = [1, [2, [3, [4, 5]]]];

const flatArrDepth1 = arr.flat(); // [1, 2, [3, [4, 5]]]

const flatArrDepth2 = arr.flat(2); // [1, 2, 3, [4, 5]]

const flatArrInfinity = arr.flat(Infinity); // [1, 2, 3, 4, 5]
// #endregion flat

// #region flatMap
const array = [1, [2, [3, [4, 5]]]];

const flatMapArr = array.flatMap((item) =>
  typeof item === "number" ? item * 2 : item
); // [ 2, 2, [ 3, [ 4, 5 ] ] ]
// #endregion flatMap

console.log(flatMapArr);
