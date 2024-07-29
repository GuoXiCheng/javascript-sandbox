// run with: ts-node src/file-system/file-read.ts

// #region read
import fs from "fs";

const data = fs.readFileSync("example/file-1.txt", "utf8");
console.log(data);

fs.readFile("example/file-2.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// #endregion read
