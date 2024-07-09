// run with: ts-node src/module/iife.ts

// #region iife-basic
const Foo = (function () {
  const _bar = "bar";
  return {
    bar: _bar,
    baz: function () {
      console.log(this.bar);
    },
  };
})();

console.log(Foo.bar); // bar
Foo.baz(); // bar
// #endregion iife-basic

// #region iife-param
const FooParam = (function (bar: string) {
  return {
    bar,
    baz: function () {
      console.log(this.bar);
    },
  };
})("bar param");

console.log(FooParam.bar); // bar param
FooParam.baz(); // bar param
// #endregion iife-param

// #region iife-extend
const FooExtend = (function (Foo: any) {
  Foo.baz = function () {
    console.log("baz");
  };
  return Foo;
})(FooParam || {});

FooExtend.baz(); // baz
// #endregion iife-extend
