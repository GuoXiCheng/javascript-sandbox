// run with: ts-node src/file-system/file-unlink.ts

// #region unlink
import fs from "fs";

fs.unlinkSync("example/file-1.txt");

fs.unlink("example/file-2.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully");
});
// #endregion unlink
