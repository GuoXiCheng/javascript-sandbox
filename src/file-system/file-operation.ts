// run with: ts-node src/file-system/file-operation.ts
import fs from "fs";

// #region write
fs.writeFileSync("example/write-file-sync.txt", "Write File Sync", "utf8");

fs.writeFile("example/write-file.txt", "Write File", "utf8", (err) => {
  if (err) throw err;
  console.log("File written successfully");
});
// #endregion write

fs.writeFileSync("example/read-file-sync.txt", "Hello, World!", "utf8");
fs.writeFileSync("example/read-file.txt", "Hello, World!", "utf8");

// #region read
const data = fs.readFileSync("example/read-file-sync.txt", "utf8");
console.log(data);

fs.readFile("example/read-file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// #endregion read

fs.writeFileSync("example/append-file-sync.txt", "Hello, World!", "utf8");
fs.writeFileSync("example/append-file.txt", "Hello, World!", "utf8");

// #region append
fs.appendFileSync("example/append-file-sync.txt", "Hello, Javascript!", "utf8");

fs.appendFile("example/append-file.txt", "Hello, Javascript!", "utf8", (err) => {
  if (err) throw err;
  console.log("Data appended successfully");
});
// #endregion append

fs.writeFileSync("example/unlink-file-sync.txt", "Hello, World!", "utf8");
fs.writeFileSync("example/unlink-file.txt", "Hello, World!", "utf8");

// #region unlink
fs.unlinkSync("example/unlink-file-sync.txt");

fs.unlink("example/unlink-file.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully");
});
// #endregion unlink
