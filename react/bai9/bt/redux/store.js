import {createStore, combineReducers} from "redux";
import {counterReducter} from "./reducers/count"
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({
    counter : counterReducter,
    cart: cartReducer,
})

export const store = createStore(rootReducer);


//ham trich xuat trang thai
export const countSelector = (state) => state.counter.value;

