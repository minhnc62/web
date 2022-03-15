import {createStore, combineReducers} from "redux";
import {counterReducter} from "./reducers/count"


const rootReducer = combineReducers({
    counter : counterReducter,
    
})

export const store = createStore(rootReducer);


//ham trich xuat trang thai
export const usecountValue = (state) => state.counter.value;

