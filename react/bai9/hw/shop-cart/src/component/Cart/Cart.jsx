import "./Cart.css";
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import CartItem from "./cartItem/CartItem";


const Cart = ({cart}) =>{

    const [totlaPrice, setTotlaPrice] = useState(0);
    const [totlaItem, setTotlaItem] = useState(0);

    useEffect(()=>{
        let items = 0;
        let price = 0;

        cart.forEach(item =>{
            items += item.qty;
            price += item.qty * item.price;

        });
        setTotlaItem(items);
        setTotlaPrice(price);

    },[cart,totlaPrice,totlaItem,setTotlaPrice,setTotlaItem])

    return(
        <div className="cart">
            <div className="cart-item">
                {cart.map((item) =>{
                    <CartItem key={item.id} itemData={item} />
                })}
                
            </div>
            <div className="cart-summary">
                <h3 className="summaty-title">Cart summary</h3>
                <div className="summary-price">
                    <span> Tổng tiền: ({totlaItem} sản phẩm)</span>
                    <span>$ {totlaPrice}</span>

                </div>
                <button className="checkout-btn">
                    Checkout
                </button>
            </div>
        </div>
    );
};

const mapstateToProps = state =>{
    return {
        cart: state.shop.cart
    }
}


export default connect(mapstateToProps)(Cart);