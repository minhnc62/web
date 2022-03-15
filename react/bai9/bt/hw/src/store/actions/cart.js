//action constant
export const ADD = "cart/add";
export const REMOVE = "cart/remove";
export const CLEAR = "cart/clear";
export const ICREQTY = "cart/increQty";
export const DECREQTY = "cart/decreQty";


//action creator
export const add = (id) =>{
  return  {
    type: ADD,
    payload:id,
    
  };
};

export const increQty = (id) =>{
    return  {
      type: ICREQTY,
      payload: id,
      
    };
  };

  export const decreQty = (id) =>{
    return  {
      type: DECREQTY,
      payload: id,
      
    };
};

  export const remove = (id) =>{
    return  {
      type: REMOVE,
      payload: id,
    };
  };

  export const clear = () =>{
    return  {
      type: CLEAR,
      
    };
  };
