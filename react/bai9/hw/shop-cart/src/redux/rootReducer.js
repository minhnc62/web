import { combineReducers } from "redux";
import shopReducer from "./reducer/shopping-reducer";

const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;