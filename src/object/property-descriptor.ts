// run with: ts-node src/object/property-descriptor.ts

export {};

// #region data-attribute
const person = {};

Object.defineProperty(person, "name", {
  value: "John", // 属性实际值，默认 undefined
  writable: false, // 属性是否可修改，默认 true
  enumerable: true, // 属性是否可通过 for-in 返回，默认 true
  configurable: true, // 属性是否可通过 delete 删除，默认 true
});
// #endregion data-attribute

// #region accessor-attribute
const book: { [key: string]: string } = {};

Object.defineProperty(book, "bookName", {
  get() {
    return this._bookName;
  },
  set(value) {
    this._bookName = `《${value}》`;
  },
  enumerable: true,
  configurable: true,
});

book.bookName = "JavaScript 高级程序设计";
console.log(book.bookName); // 《JavaScript 高级程序设计》
// #endregion accessor-attribute

// #region define-multiple-attributes
const car = {};
Object.defineProperties(car, {
  brand: {
    value: "BMW",
    writable: false,
    enumerable: true,
    configurable: true,
  },
  color: {
    get() {
      return this._color;
    },
    set(value) {
      this._color = value;
    },
    enumerable: true,
    configurable: true,
  },
});
// #endregion define-multiple-attributes

// #region get-property-descriptor
const propertyDescriptor = Object.getOwnPropertyDescriptor(car, "brand");
console.log(propertyDescriptor);
// { value: 'BMW', writable: false, enumerable: true, configurable: true }
// #endregion get-property-descriptor

// #region get-property-descriptors
const propertyDescriptors = Object.getOwnPropertyDescriptors(car);
console.log(propertyDescriptors);
/**
{
  brand: {
    value: 'BMW',
    writable: false,
    enumerable: true,
    configurable: true
  },
  color: {
    get: [Function: get],
    set: [Function: set],
    enumerable: true,
    configurable: true
  }
}
 */
// #endregion get-property-descriptors
