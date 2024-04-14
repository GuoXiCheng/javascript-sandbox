// run with: ts-node src/redux-demo/index.ts

import { store } from "./store";

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
