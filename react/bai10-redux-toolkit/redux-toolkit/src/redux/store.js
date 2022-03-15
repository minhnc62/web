import { configureStore } from "@reduxjs/toolkit";
import {reducer} from "./couterslice";

export const store = configureStore({
    reducer: {
        counter:reducer,
    },
});

export default store;

