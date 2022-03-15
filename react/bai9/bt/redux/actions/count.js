export const ICREMENT = "couter/increment";
export const DECREMENT = "couter/decrement";


  export const increment = ()  => {
    return{
      type: ICREMENT,
    }
  };

  export const decrement = () => {
    return{
      type: DECREMENT,
    }
  };