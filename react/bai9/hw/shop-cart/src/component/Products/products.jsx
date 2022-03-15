import React from 'react';

import Product from './product/Product';
//import stypes from "./product.module.css";

import { connect } from 'react-redux';

const Products = ({ products }) => {
    return (
        <div className='products'>
            {products.map((item) => {
                <Product key={item.id} productData={item} />
            })}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Products);