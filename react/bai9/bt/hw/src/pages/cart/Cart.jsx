import { useDispatch, useSelector } from "react-redux"
import { useAllItems, useTotalBill } from "../../store";
import { remove, clear,increQty,decreQty } from "../../store/actions/cart";
import {Row, Col} from "react-bootstrap"
import "./cart.css"



export default () => {
    const dispatch = useDispatch();
    const items  = useSelector(useAllItems);
    // const totalItem = useSelector(useTotalItem);
    const totalBill = useSelector(useTotalBill);


    
   
    return (<main className="main">
        <section className="products">
            <div className="section-header">
                <h2 className="section-heading">
                    Gior hang
                </h2>
            </div>
            <div className="section-content">
                <Row className="section-list">
                    {items.map(({product,quantity,index}) => {
                        return <Col md={3} className="product" key={product.id}>
                            <img className="product-thumb" src={product.thumb} alt={product.name} />
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price}</p>
                            <button onClick={() => dispatch(decreQty (product.id))}>-</button>
                            <input type="number" value={quantity} />
                            <button onClick={() => dispatch(increQty (product.id))}>+</button>
                            <button className="btn-delete" onClick={() => dispatch(remove (product.id))}> Xóa sản phẩm</button>
                        </Col>
                    })}
                </Row>
            </div>
            <div className="cart-info">
                {/* <p>total item: {totalItem} </p> */}
                <p>total Bill: {totalBill} </p>

            </div>
            <div className="clear-all">
                <button onClick={() => dispatch(clear ())}>xóa tất cả</button>
            </div>
        </section>
    </main>);
}