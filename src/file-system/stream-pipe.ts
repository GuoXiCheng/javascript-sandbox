// run with: ts-node src/file-system/stream-pipe.ts

import fs from "fs";
import zip from "zlib";

const readStream = fs.createReadStream("example/file.txt", "utf8");
const writeStream = fs.createWriteStream("example/file-copy.txt.gz");
const gzip = zip.createGzip();

readStream.pipe(gzip).pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Write completed");
});
