const initalState = [];

export const cartReducer = (state = initalState, action)=>{

    switch(action.type){
        case "cart/addItem": {
            const newState = [...state];//sao chep
            newState.push(action.payload);
            return newState;
        }
        case "cart/removeItem" :{
            //loc ra cái không phải là cùng payload
            const newState = state.filter((item) => item != action.payload)
            return newState;

        }
        case "cart/clearItem" :{
            
            return initalState;

        }
        default: {
            return state ;
        }
    }
        
}