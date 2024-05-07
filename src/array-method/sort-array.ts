// run with: ts-node src/array-method/sort-array.ts
export {};

// #region sort-1
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // [ 'Dec', 'Feb', 'Jan', 'March' ]
// #endregion sort-1

// #region sort-2
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
mixedNumericArray.sort((a, b) => Number(a) - Number(b));
console.log(mixedNumericArray); // [1, 5, '9', 40, '80', 200, '700']
// #endregion sort-2

// #region reverse
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [ 5, 4, 3, 2, 1 ]
// #endregion reverse
