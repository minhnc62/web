import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import store from "./store/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
              <Route index element={<Home/>}></Route>
              <Route path="/movie/:id" element={<Movie/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
