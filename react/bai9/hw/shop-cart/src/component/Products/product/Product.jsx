import React from "react"
import { Link } from "react-router-dom"
import './product.css';
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../../redux/actions/shopping-action";

const Product = (productData, addToCart, loadCurrentItem) => {
    return (
        <div className="product">
            <img className="product-img" src={productData.image} alt={productData.title} />

            <div className="product-details">
                <p className="product-title">
                    {productData.title}
                </p>
                <p className="product-desc">{productData.description}</p>
                <p className="product-price">$ {productData.price}</p>
            </div>
            <div className="product-button">
                <Link to={`/product/${productData.id}`}>
                    <button onClick={() => loadCurrentItem(productData)} className="button-btn">Xem thêm</button>
                </Link>
                <button className="button-add" onClick={() => addToCart(productData.id)}>thêm vào giỏ</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product);

