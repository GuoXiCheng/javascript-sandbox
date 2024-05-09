// run with: ts-node src/deep-copy.ts
export {};

const obj = {
  name: "Alice",
  age: 20,
  fn: () => {},
  location: undefined,
  skills: {
    language: "JavaScript",
    framework: "React",
  },
};

// #region JSON
const copyOfJSON = JSON.parse(JSON.stringify(obj));
// #endregion JSON

// #region recursion
function deepCopy(obj: any, hash = new WeakMap()) {
  if (obj === null) return null;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);

  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepCopy(obj[key], hash);
    }
  }
  return cloneObj;
}

const copyOfDeep = deepCopy(obj);
// #endregion recursion

// #region lodash
import _ from "lodash";

const copyOfLodash = _.cloneDeep(obj);
// #endregion lodash
