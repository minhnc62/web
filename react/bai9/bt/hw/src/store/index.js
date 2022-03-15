import { useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cart";
import { toastReducer } from "./reducers/toast";


const rootReducer = combineReducers({
  cart: cartReducer,
  toast: toastReducer, 
});

export const store = createStore(rootReducer, composeWithDevTools());

//ham trich xuat trang thai
export const useAllItems = (state) => state.cart;

//export const useTotalItem = (state) => state.cart.length;
export const useTotalBill = (state) =>
  state.cart.reduce(
    (total, item) => (total += item.product.price * item.quantity),
    0
  );

  export const useToast = (state) => state.toast;
 
