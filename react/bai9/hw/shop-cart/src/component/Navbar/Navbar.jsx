import "./navbar.css";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = ({cart})=>{

    const [cartCount, setCartCounter] = useState(0);

    //hàm cập nhập sp có trong cart
    useEffect(()=>{
        let count = 0;
        cart.forEach((item) => {
            count += item.qty; 
        });
        setCartCounter(count);

    },[cart, cartCount])

    return(
        <div className="navbar">
            <Link to="/">
                <h2 className="nav-logo">Redux shopping cart</h2>
            </Link>
            <Link to="/cart">
                <div className="navbar-cart">
                    <h3 className="cart-title">
                        Cart
                    </h3>
                    <img className="cart-img" src="" alt="" />
                    <div className="cart-counter">{cartCount}</div>
                </div>
            </Link>
        </div>
    );
};

const mapstateToProps = state =>{
    return {
        cart: state.shop.cart
    }
}

export default connect(mapstateToProps) (Navbar);