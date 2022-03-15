import "./SingleItem.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/shopping-action";
const SingleItem = ({currentItem,addToCart}) =>{
    return(
        <div className="single-item">
            <img src={currentItem.image} alt={currentItem.title} className="single-item-img" />
            <div className="single-item-detail">
                <p className="detail-title">{currentItem.title}</p>
                <p className="detail-desc">{currentItem.description}</p>
                <p className="detail-price">{currentItem.price}</p>
                <button onClick={()=>addToCart(currentItem.id)} className="detail-addbtn">Thêm vào giỏ</button>

            </div>
        </div>
    );
}


const mapStateToProps = state =>{
    return{
        currentItem: state.shop.currentItem,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);