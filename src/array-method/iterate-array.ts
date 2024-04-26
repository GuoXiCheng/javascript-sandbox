// run with: ts-node src/array-method/iterative-array.ts

export {};

const arr = [1, 2, 3, 4, 5];

console.log("正向循环");
// #region for-loop-1
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// #endregion for-loop-1

console.log("反向循环");
// #region for-loop-2
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
// #endregion for-loop-2

console.log("跳过循环");
// #region for-loop-3
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) continue;
  console.log(arr[i]);
}
// #endregion for-loop-3

console.log("循环中断");
// #region for-loop-4
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) break;
  console.log(arr[i]);
}
// #endregion for-loop-4

console.log("for-of循环");
// #region for-of-1
for (const item of arr) {
  console.log(item);
}
// #endregion for-of-1

console.log("for-of循环（索引）");
// #region for-of-2
for (const [index, item] of arr.entries()) {
  console.log(index, item);
}
// #endregion for-of-2

console.log("forEach循环");
// #region forEach-1
arr.forEach((item, index, array) => {
  console.log(item, index, array);
});
// #endregion forEach-1

console.log("forEach循环中断");
// #region forEach-2
try {
  arr.forEach((item) => {
    if (item % 2 === 0) throw new Error("Loop interrupted");
    console.log(item);
  });
} catch (e: any) {
  if (e.message !== "Loop interrupted") {
    // 如果异常不是预期中的中断循环异常，重新抛出
    throw e;
  }
}
// #endregion forEach-2
