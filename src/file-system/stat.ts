// run with: ts-node src/file-system/stat.ts

// #region stat
import fs from "fs";

fs.writeFileSync("example/file.txt", "Hello, world!");

const stats = fs.statSync("example/file.txt");
console.log(stats);

fs.stat("example/file.txt", (err, stats) => {
  if (err) throw err;
  console.log(stats);
});
// #endregion stat
