// run with: ts-node src/array-method/search-array.ts
export {};

const arr = ["apple", "banana", "cherry", "date", "elderberry", NaN];

// #region indexOf-1
const resOfIndex = arr.indexOf("banana");
// #endregion indexOf-1

// #region indexOf-2
const resOfIndexForwards = arr.indexOf("banana", 2);
// #endregion indexOf-2

// #region indexOf-3
const resOfIndexBackwards = arr.indexOf("banana", -2);
// #endregion indexOf-3

// #region lastIndexOf-1
const resOfLastIndex = arr.lastIndexOf("banana");
// #endregion lastIndexOf-1

// #region lastIndexOf-2
const resOfLastForwards = arr.lastIndexOf("banana", 2);
// #endregion lastIndexOf-2

// #region lastIndexOf-3
const resOfLastBackwards = arr.lastIndexOf("banana", -2);
// #endregion lastIndexOf-3

// #region find
const resOfFind = arr.find((item, index, obj) => {
  return item === "banana";
});
// #endregion find

// #region findIndex
const resOfFindIndex = arr.findIndex((item, index, obj) => {
  return item === "banana";
});
// #endregion findIndex

// #region includes-1
const resOfIncludes = arr.includes("banana");
// #endregion includes-1

// #region includes-2
const resOfIncludesForwards = arr.includes("banana", 2);
// #endregion includes-2

// #region includes-3
const resOfIncludesBackwards = arr.includes("banana", -2);
// #endregion includes-3

// #region check-not-a-number
const resOfIndexOfNaN = arr.indexOf(NaN); // -1
const resOfIncludesNaN = arr.includes(NaN); // true
// #endregion check-not-a-number
console.log(resOfIncludesNaN);
