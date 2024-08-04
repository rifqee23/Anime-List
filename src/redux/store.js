import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./actions/productSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

export default store;
