// run with: ts-node src/array-method/sparse-array.ts

// #region sparse-array-vs-dense-array
const sparseArr = [1, , , 4];
const denseArr = [1, undefined, undefined, 4];

console.log(sparseArr); // [ 1, <2 empty items>, 4 ]
console.log(denseArr); // [ 1, undefined, undefined, 4 ]

console.log(sparseArr.length); // 4
console.log(denseArr.length); // 4

console.log(JSON.stringify(sparseArr)); // [1,null,null,4]
console.log(JSON.stringify(denseArr)); // [1,null,null,4]

console.log(3 in sparseArr); // false
console.log(3 in denseArr); // true
// #endregion sparse-array-vs-dense-array

// #region create-sparse-array
const createSparseArr = [];
createSparseArr[3] = 3;

console.log(createSparseArr); // [ <3 empty items>, 3 ]
console.log(createSparseArr.length); // 4
console.log(JSON.stringify(createSparseArr)); // [null,null,null,3]
// #endregion create-sparse-array

// #region check-sparse-array
const checkSparseArr = new Array(3);
checkSparseArr[3] = 3;

console.log(0 in checkSparseArr); // false
console.log(checkSparseArr.hasOwnProperty(0)); // false
// #endregion check-sparse-array

// #region iterate-sparse-array
const iterateSparseArr = [];
iterateSparseArr[3] = "a";

for (const key in iterateSparseArr) {
  console.log(iterateSparseArr[key]); // a
}

iterateSparseArr.forEach((item) => {
  console.log(item); // a
});

for (const item of iterateSparseArr) {
  console.log(item); // undefined undefined undefined a
}

for (let i = 0; i < iterateSparseArr.length; i++) {
  console.log(iterateSparseArr[i]); // undefined undefined undefined a
}
// #endregion iterate-sparse-array
