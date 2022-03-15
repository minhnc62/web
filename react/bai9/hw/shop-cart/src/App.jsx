import React from 'react';

import { connect } from 'react-redux';
import './App.css'
import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Products/products";
import Cart from "./component/Cart/Cart";
import SingleItem from "./component/SingleItem/SingleItem";


import { Router, Route, Routes,Navigate } from 'react-router-dom'


function App(currentItem) {


  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {
            !currentItem ? (
              <Navigate to="/" />
            ) : (
              <Route exact path="/poroduct/:id" component={SingleItem} />
            )
          }
          
        </Routes>

      </div>
    </Router>

  )
};


const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem,
  }
}

export default connect(mapStateToProps)(App);





