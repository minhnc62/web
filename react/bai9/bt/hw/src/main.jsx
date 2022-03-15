import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from "react-redux"
import { store } from "./store"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<Home/>}></Route>
                  <Route path="cart" element={<Cart/>}></Route>

              </Route>
          </Routes>
      </BrowserRouter>
      
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)
