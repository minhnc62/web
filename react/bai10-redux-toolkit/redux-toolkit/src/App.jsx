import {useSelector, useDispatch} from "react-redux";
import {inc, dec, reset} from "./redux/couterslice";



function App() {
  
  const dispatch = useDispatch();
  const value = useSelector((state) =>state.counter.value)

  return (
    <div className="App">
     <p>current count: {value}</p>
     <button onClick={()=>dispatch(inc())}>inc</button>
     <button onClick={()=>dispatch(dec())}>dec</button>

     <button onClick={()=>dispatch(reset())}>reset</button>

    </div>
  )
}

export default App
