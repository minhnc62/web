
import { ICREMENT,DECREMENT } from "../actions/count";

const initalState = {
    value : 0,
}

export const counterReducter = (state = initalState, action) =>{
    switch(action.type){
      case ICREMENT :
        return {
          count:state.value + 1
        };
        case DECREMENT :
          return {
            count:state.value - 1
          };
        default :
          return state;
    }
  }
