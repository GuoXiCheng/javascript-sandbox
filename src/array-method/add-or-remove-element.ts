// run with: ts-node src/array-method/add-or-remove-element.ts
export {};
// #region push
const fruitsOfPush = [];
const resOfPush = fruitsOfPush.push("Apple", "Banana"); // 2
// ["Apple", "Banana"]
// #endregion push

// #region unshift
const fruitsOfUnshift = ["Apple", "Banana"];
const resOfUnshift = fruitsOfUnshift.unshift("Orange", "Pineapple"); // 4
// ["Orange", "Pineapple", "Apple", "Banana"]
// #endregion unshift

// #region pop
const fruitsOfPop = ["Apple", "Banana"];
const resOfPop = fruitsOfPop.pop(); // "Banana"
// [ 'Apple' ]
// #endregion pop

// #region shift
const fruitsOfShift = ["Orange", "Pineapple", "Apple"];
const resOfShift = fruitsOfShift.shift(); // "Orange"
// ["Pineapple", "Apple"]
// #endregion shift

// #region splice-1
const fruitsOfSpliceAdd = ["Apple", "Banana"];
const resOfSpliceAdd = fruitsOfSpliceAdd.splice(1, 1, "L", "K"); // [ 'Banana' ]
// [ 'Apple', 'L', 'K' ]
// #endregion splice-1

// #region splice-2
const fruitsOfSpliceRemove = ["Apple", "Banana", "Orange", "Pineapple"];
const resOfSpliceRemove = fruitsOfSpliceRemove.splice(1, 1); // [ 'Banana' ]
// [ 'Apple', 'Orange', 'Pineapple' ]
// #endregion splice-2
