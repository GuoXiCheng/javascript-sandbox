// #region named-export
export const name = "module";
export const age = 18;
export function sayHello() {
  console.log("Hello");
}
// #endregion named-export

// #region export-default
export default function () {
  console.log("default module");
}
// #endregion export-default

// #region bulk-export
const foo = "foo",
  bar = "bar",
  baz = "baz";
export { foo, bar, baz };
// #endregion bulk-export

// #region rename-export
const newName = "new module";
export { newName as ModuleName };
// #endregion rename-export

// #region dynamic-export
export const dynamic = "dynamic";
// #endregion dynamic-export
