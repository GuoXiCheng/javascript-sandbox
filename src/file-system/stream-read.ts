// run with: ts-node src/file-system/stream-read.ts

// #region read
import fs from "fs";

const readStream = fs.createReadStream("example/file.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Read completed");
});

readStream.on("error", (error) => {
  console.error(error);
});
// #endregion read
