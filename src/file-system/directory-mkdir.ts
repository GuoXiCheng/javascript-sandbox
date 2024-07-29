// run with: ts-node src/file-system/directory-mkdir.ts
// #region mkdir
import fs from "fs";

fs.mkdirSync("example/directory-1");

fs.mkdir("example/directory-2", (err) => {
  if (err) throw err;
  console.log("Directory created successfully");
});
// #endregion mkdir
