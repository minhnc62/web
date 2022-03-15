import { useDispatch, useSelector } from 'react-redux'
import {usecountValue} from "./store"
import { increment,decrement } from './store/actions/count';

import './App.css'

function App() {
  const dispatch = useDispatch();
  const value = useSelector(usecountValue);

  return (
    <div className="App">
     <p>current value : {value}</p>
      <button onClick={()=>dispatch(decrement)}>-</button>
    
    <button onClick={()=>dispatch(increment)}>+</button>
    </div>
  )
}

export default App
