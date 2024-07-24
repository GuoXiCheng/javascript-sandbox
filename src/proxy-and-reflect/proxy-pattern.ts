// run with: ts-node src/proxy-and-reflect/proxy-pattern.ts
export {};

// #region trace-attribute

const user = {
  name: "Jack",
};

const traceAttributeProxy = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`getting ${String(prop)}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`setting ${String(prop)} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
});

traceAttributeProxy.name; // getting name
traceAttributeProxy.name = "John"; // setting name to John

// #endregion trace-attribute

// #region hidden-attribute
const hiddenProperties = ["id", "password"];
const targetObj = {
  id: 1,
  name: "John",
  password: "password",
};

const hiddenAttributeProxy = new Proxy(targetObj, {
  get(target, prop, receiver) {
    if (hiddenProperties.includes(String(prop))) {
      return undefined;
    } else return Reflect.get(target, prop, receiver);
  },
  has(target, prop) {
    if (hiddenProperties.includes(String(prop))) {
      return false;
    } else return Reflect.has(target, prop);
  },
});

console.log(hiddenAttributeProxy.id); // undefined
console.log(hiddenAttributeProxy.password); // undefined
console.log(hiddenAttributeProxy.name); // John

console.log("id" in hiddenAttributeProxy); // false
console.log("password" in hiddenAttributeProxy); // false
console.log("name" in hiddenAttributeProxy); // true
// #endregion hidden-attribute

// #region validate-attribute
const target: { [key: string]: any } = {
  onlyNumber: 0,
};

const validateAttributeProxy = new Proxy(target, {
  set(target, prop, value, receiver) {
    if (typeof value !== "number") {
      throw new Error(`Error: ${String(prop)} must be a number`);
    } else return Reflect.set(target, prop, value, receiver);
  },
});

validateAttributeProxy.onlyNumber = 1;
console.log(validateAttributeProxy.onlyNumber); // 1

try {
  validateAttributeProxy.onlyNumber = "2";
} catch (e: any) {
  console.error(e.message); // Error: onlyNumber must be a number
}
console.log(validateAttributeProxy.onlyNumber); // 1
// #endregion validate-attribute

// #region validate-function-parameter
function median(...nums: any[]) {
  return nums.sort()[Math.floor(nums.length / 2)];
}

const validateFunctionParameterProxy = new Proxy(median, {
  apply(target, thisArg, argArray) {
    for (const arg of argArray) {
      if (typeof arg !== "number") {
        throw new Error(`Error: ${arg} must be a number`);
      }
    }
    return Reflect.apply(target, thisArg, argArray);
  },
});

console.log(validateFunctionParameterProxy(4, 1, 7)); // 4
try {
  validateFunctionParameterProxy(4, 1, "7");
} catch (e: any) {
  console.error(e.message); // Error: 7 must be a number
}
// #endregion validate-function-parameter

// #region validate-constructor-parameter
class User {
  private _id?: number;
  constructor(id?: number) {
    this._id = id;
  }
}

const validateConstructorParameterProxy = new Proxy(User, {
  construct(target, argArray, newTarget) {
    if (argArray[0] === undefined) {
      throw new Error("Error: id is required");
    } else return Reflect.construct(target, argArray, newTarget);
  },
});

new validateConstructorParameterProxy(1);

try {
  new validateConstructorParameterProxy();
} catch (e: any) {
  console.error(e.message); // Error: id is required
}
// #endregion validate-constructor-parameter

// #region data-binding
const studentList: Student[] = [];

class Student {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

const dataBindingProxy = new Proxy(Student, {
  construct(target, argArray, newTarget) {
    const student = Reflect.construct(target, argArray, newTarget);
    studentList.push(student);
    return student;
  },
});

new dataBindingProxy("John");
new dataBindingProxy("Jane");
new dataBindingProxy("Jack");

console.log(studentList);
/**
[
  Student { _name: 'John' },
  Student { _name: 'Jane' },
  Student { _name: 'Jack' }
]
 */
// #endregion data-binding

// #region observable-object
const productList: string[] = [];

function emit(product: string) {
  console.log(`Product ${product} added`);
}

const observableObjectProxy = new Proxy(productList, {
  set(target, prop, value, receiver) {
    const res = Reflect.set(target, prop, value, receiver);
    if (res && prop !== "length") {
      emit(Reflect.get(target, prop, receiver));
    }
    return res;
  },
});

observableObjectProxy.push("Apple"); // Product Apple added
observableObjectProxy.push("Banana"); // Product Banana added
// #endregion observable-object
