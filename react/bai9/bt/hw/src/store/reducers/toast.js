import {SHOW, HIDE} from "../actions/toast";

const initialState = {
    isShow: false,
    msg:"",
};

export const toastReducer = (state= initialState, {type, payload}) =>{
    switch(type) {
        case SHOW: {
            return{
                isShow: true,
                msg: payload,
            }
        }
        case HIDE: {
            return{
                isShow: false,
                msg: "",
            }
        }
        default: {
            return state
        }
    }
}

