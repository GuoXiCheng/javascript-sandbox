// run with: ts-node src/proxy-and-reflect/reflect.ts

export {};

// #region direct-use-reflect
function sum(a: number, b: number) {
  return a + b;
}

console.log(Reflect.apply(sum, undefined, [1, 2])); // 3
// #endregion direct-use-reflect

// #region use-reflect-in-proxy-handler
const obj: { [key: string]: any } = {};

const proxy = new Proxy(obj, {
  get(target, prop, receiver) {
    console.log(`getting ${String(prop)}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`setting ${String(prop)} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
});

proxy.id = "proxyId";
proxy.id;
// #endregion use-reflect-in-proxy-handler
