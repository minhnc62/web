import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { todoReducer } from "./todoSlice";

 const store = configureStore({
    reducer: {
        todo: todoReducer,
        product: productReducer,
    },
});
export default store;