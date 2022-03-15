import { ADD, REMOVE, CLEAR, DECREQTY, ICREQTY } from "../actions/cart";
import { getById } from "../../db/products";

const initalState = [];

export const cartReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ADD: {
      const item = state.find((item) => item.product.id == payload);
      if (item) {
        const newState = state.map((item) =>
          item.product.id == payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return newState;
      }else{
        const product = getById(payload);

        const newState = [...state];
        newState.push({
          product,
          quantity: 1,
        });
        return newState;
      }

      
    }
    case ICREQTY: {
       
      const newState = state.map((item) =>
        item.product.id == payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      return newState;
    }
    case DECREQTY: {
      const newState = state.map((item) =>
        item.product.id == payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 } 
            : item
      );
      return newState;
    }
    case REMOVE: {
      //loc ra cái không phải là cùng payload
      const newState = state.filter(({product}) => product.id != payload);
      return newState;
    }
    case CLEAR: {
      return initalState;
    }
    default: {
      return state;
    }
  }
};
