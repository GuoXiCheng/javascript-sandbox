// run with: ts-node src/file-system/file-append.ts

// #region append
import fs from "fs";

fs.appendFileSync("example/file-1.txt", "Hello, Javascript!", "utf8");

fs.appendFile("example/file-2.txt", "Hello, Javascript!", "utf8", (err) => {
  if (err) throw err;
  console.log("Data appended successfully");
});
// #endregion append
