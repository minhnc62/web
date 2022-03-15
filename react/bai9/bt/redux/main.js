
import {increment,decrement} from "./actions/count";
import {addItem} from "./actions/cart";
import { store } from "./store";
import { countSelector } from "./store";

  const btnIncrement = document.getElementById("increment");
  const btnDecrement = document.getElementById("decrement");
  const currenValuet = document.getElementById("current-value");


  //action creators

  //store.dispatch(addItem("iphone"))


  store.subscribe(()=>(currenValuet.textContent = countSelector(store.getState()))
  )
 
  btnIncrement.onclick = () =>{
    store.dispatch(increment)
  }
  btnDecrement.onclick = () =>{
    store.dispatch(decrement)
  }