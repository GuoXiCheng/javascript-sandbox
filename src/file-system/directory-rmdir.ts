// run with: ts-node src/file-system/directory-rmdir.ts

// #region rmdir
import fs from "fs";

fs.rmdirSync("example/directory-1");

fs.rmdir("example/directory-2", (err) => {
  if (err) throw err;
  console.log("Directory deleted successfully");
});
// #endregion rmdir
