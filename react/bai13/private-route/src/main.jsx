import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='admin' element={<Admin />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>

    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
)
