// run with: ts-node src/file-system/stream-write.ts
import fs from "fs";

// #region write
const writeStream = fs.createWriteStream("example/file.txt");

writeStream.on("open", () => {
  writeStream.write("Hello World!\n");
  writeStream.write("Another line!\n");
  writeStream.end();
});

writeStream.on("finish", () => {
  console.log("Write completed");
});

writeStream.on("error", (error) => {
  console.error(error);
});
// #endregion write
