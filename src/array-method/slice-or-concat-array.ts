// run with: ts-node src/array-method/slice-or-concat-array.ts

export {};

// #region slice
const animals = ["ant", "bison", "camel", "duck", "elephant"];

const slice1 = animals.slice(2); // ["camel", "duck", "elephant"]

const slice2 = animals.slice(2, 4); // ["camel", "duck"]

const slice3 = animals.slice(-2); // ["duck", "elephant"]

const slice4 = animals.slice(-2, -1); // ["duck"]
// #region slice

// #region concat
const arr1 = ["a"];
const arr2 = ["d", "e"];
const arr3 = ["g", "h", "i"];

const concat1 = arr1.concat(arr2); // [ 'a', 'd', 'e' ]

const concat2 = arr1.concat(arr2, arr3); // [ 'a', 'd', 'e', 'g', 'h', 'i' ]

const concat3 = arr1.concat("b", "c"); // [ 'a', 'b', 'c' ]
// #endregion concat

// #region join
const elements = ["Fire", "Air", "Water"];

const join1 = elements.join(); // "Fire,Air,Water"

const join2 = elements.join(""); // "FireAirWater"

const join3 = elements.join("-"); // "Fire-Air-Water"

const join4 = elements.join(" "); // "Fire Air Water"
// #endregion join
