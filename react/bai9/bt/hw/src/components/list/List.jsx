import Item from "../item/Item";
import {  useSelector } from 'react-redux';
import {  clear } from './store/actions/cart';
import { useCart } from './store';
import "./list.css";

const List = ({cart, removeItem, increQty, decreQty}) =>{
    return (
        <div className="product-list">
            {cart.map((item,idx) =>(
                <Item
                    key={idx}
                    
                />
            ))}
z
        </div>
    );
}
export default List