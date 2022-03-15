import { useDispatch, useSelector } from 'react-redux';
import { clear } from './store/actions/cart';
import './App.css'
import { Outlet, NavLink } from 'react-router-dom';
import { Toast } from "react-bootstrap";
import { hide } from './store/actions/toast';
import { useToast } from "./store/index";

function App() {

  const dispatch = useDispatch();
  const { isShow, msg } = useSelector(useToast)

  return (
    <div className='container'>
      <header className="header">
        <h1 className="heading">Phone Store</h1>

      </header>
      <nav className='nav'>
        <NavLink to="/" >Trang chủ</NavLink>
        <NavLink to="/cart" >Gior Hàng</NavLink>

      </nav>
      <Outlet />
      {isShow && (
        <Toast onClose={()=> dispatch(hide())}>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>

          </Toast.Header>
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
      )}



    </div>
  )
}

export default App
