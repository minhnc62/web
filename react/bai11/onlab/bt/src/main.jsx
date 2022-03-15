import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App'
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          </Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)
