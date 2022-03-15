export const SHOW = "toast/show";
export const HIDE = "toast/hide";

export const show = (msg) =>{
    return {
        type: SHOW,
        payload: msg,
    };
};

export const hide = () =>{
    return {
        type: HIDE,
         
    };
};
