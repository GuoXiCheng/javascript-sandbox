// run with: ts-node src/file-system/file-write.ts

// #region write
import fs from "fs";

fs.writeFileSync("example/file-1.txt", "Hello, World!", "utf8");

fs.writeFile("example/file-2.txt", "Hello, World!", "utf8", (err) => {
  if (err) throw err;
  console.log("File written successfully");
});
// #endregion write
