//import { ADJUST_QTY, REMOVE_FORM_CART,ADD_TO_CART, LOAD_CURRENT_ITEM} from "../shopping/shopping-type";
import * as actionTypes from "../shopping/shopping-type";

export  const addToCart = (itemID) => {
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};
export const removeFormCart = (itemID) =>{
    return{
        type: actionTypes.REMOVE_FORM_CART,
        payload:{
            id: itemID
        },
    };
};

export const adjustQty = (itemID, value) =>{
    return{
        type: actionTypes.ADJUST_QTY,
        payload:{
            id: itemID,
            qty: value,
        },
    };
};

export const loadCurrentItem = (item) =>{
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload:{
            id: item,
            
        },
    };
};