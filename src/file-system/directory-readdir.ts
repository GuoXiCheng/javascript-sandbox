// run with: ts-node src/file-system/directory-readdir.ts

// #region readdir
import fs from "fs";

const files = fs.readdirSync("example");
console.log(files); // [ '.gitkeep', 'directory-1', 'directory-2' ]

fs.readdir("example", (err, files) => {
  if (err) throw err;
  console.log(files);
});
// #endregion readdir
