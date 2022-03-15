import { getAll } from "../../db/products"
import { add } from "../../store/actions/cart";
import { useDispatch } from "react-redux";
import {Row, Col} from "react-bootstrap"
import "./home.css" 
import { hide, show } from "../../store/actions/toast";

export default () =>{
    const products = getAll();
    const dispatch = useDispatch()

    return (<main className="main">
        <section className="products">
            <div className="section-header">
                <h2 className="section-heading">
                    List Sản Phẩm
                </h2>
            </div>
            <div className="section-content">
                <Row className="section-list">
                    {products.map(item =>{
                        return <Col md={3} className="product" key={item.id}>
                                <img className="product-thumb" src={item.thumb} alt={item.name} />
                                <p className="product-name">{item.name}</p>
                                <p className="product-price">{item.price}</p>
                                <button className="btn-add" onClick={()=>{
                                    dispatch(add(item.id));
                                    dispatch(show("thêm vào gỏ hàng thành công"));
                                    setTimeout(() => {
                                        dispatch(hide())
                                      }, 1000)
                                    
                                    }}> Thêm vào giỏ hàng</button>
                        </Col>
                    })}
                </Row>
            </div>
        </section>
    </main>);
}