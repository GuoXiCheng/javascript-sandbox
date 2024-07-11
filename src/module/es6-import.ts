// run with: ts-node src/module/es6-import.ts

// #region import-named
import { name, sayHello } from "./es6-export";
console.log(name); // module
sayHello(); // Hello
// #region import-named

// #region import-default
import moduleDefault from "./es6-export";
moduleDefault(); // default module
// #region import-default

// #region import-bulk
import * as Foo from "./es6-export";
console.log(Foo.foo, Foo.bar, Foo.baz); // foo bar baz
// #region import-bulk

// #region rename-import
import { ModuleName as moduleName } from "./es6-export";
console.log(moduleName); // new module
// #region rename-import

// #region dynamic-import
import("./es6-export").then((module) => {
  console.log(module.dynamic); // dynamic
});
// #region dynamic-import
