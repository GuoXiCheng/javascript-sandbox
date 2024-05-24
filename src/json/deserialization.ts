// run with: ts-node src/json/deserialization.ts
export {};

// #region parse
const book = `{
    "title": "Professional JavaScript",
    "date": "2024-11-30T16:00:00.000Z"
  }`;
const bookObj = JSON.parse(book, (key, value) =>
  key === "date" ? new Date(value) : value
);
console.log(bookObj.date.getFullYear()); // 2024
// #endregion parse
