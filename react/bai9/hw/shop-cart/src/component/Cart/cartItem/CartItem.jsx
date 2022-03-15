import React, {useState} from "react";
import { connect } from "react-redux";
import { removeFormCart, adjustQty } from "../../../redux/actions/shopping-action"
import "./cartitem.css";




const CartItem = (itemData, removeFormCart) => {

    const [input, setInput] = useState(itemData.qty)
    const onChangeHandler = (e) =>{

        setInput(e.target.value);
        adjustQty(itemData.id,e.target.value);

    }

    return (
        <div className="cartitem">
            <img src={itemData.image} alt={itemData.title} className="cart-item-img" />
            <div className="cart-item-detail">
                <p className="detail-title">
                    {itemData.title}
                </p>
                <p className="detail-desc">{itemData.description}</p>
                <p className="detail-price">{itemData.price}</p>
            </div>
            <div className="cart-item-action">
                <div className="cart-item-qty">
                    <label htmlFor="qty">Số lượng</label>
                    <input type="number" min="1" id="qty" name="qty" value={input} onChange={onChangeHandler} />
                </div>
                <button onClick={() => removeFormCart(itemData.id)} className="delete-btn">
                    Xóa
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeFormCart: (id) => dispatch(removeFormCart(id)),
        adjustQty: (id, value) =>dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);


