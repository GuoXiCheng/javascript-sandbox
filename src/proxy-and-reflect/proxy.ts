// run with: ts-node src/proxy-and-reflect/proxy.ts

// #region create-proxy
const target = {
  id: "target",
};

const handler = {
  get() {
    return "target handled by proxy";
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.id); // target handled by proxy
// #endregion create-proxy

// #region revocable-proxy
const revocableTarget = {
  id: "revocableTarget",
};

const revocableHandler = {
  get() {
    return "revocableTarget handled by proxy";
  },
};

const { proxy: revocableProxy, revoke } = Proxy.revocable(revocableTarget, revocableHandler);

console.log(revocableProxy.id); // revocableTarget handled by proxy

revoke();

console.log(revocableProxy.id); // TypeError: Cannot perform 'get' on a proxy that has been revoked
// #endregion revocable-proxy
