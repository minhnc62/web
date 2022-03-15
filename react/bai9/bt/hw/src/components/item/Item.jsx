// import "./item.css";
// import { useDispatch, useSelector } from 'react-redux';


// const Item = ({product, quantity, removeItem, increQty, decreQty}) =>{

// const handleChange = (e) =>{
//     const value = e.target.value ;
//     if(value == 0 ) return ;
//     else if (value > quantity ) increQty(product.id);
//     else decreQty(product.id);

// }

//     return (
//         <div className="product">
//             <div className="product-img">
//                 <img src={product.thumb} alt={product.name} />
//             </div>
//             <div className="product-info">
//                 <h3 className="product-name">{product.name}</h3>
//                 <p className="product-price">{product.price}</p>
//                 <button className="btn-remove" onClick={()=>removeItem(product.id)}>
//                     Remove
//                 </button>
//             </div>
//             <input name type="number" aria-label="quantity" className="input-qty" min="1" name=""
//                    value={quantity}
//                    className="change-quantity"
//                    onChange={handleChange}
//                     />
            
            
//         </div>
//     );
// }
// export default Item
