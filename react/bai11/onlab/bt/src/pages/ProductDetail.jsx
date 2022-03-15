import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useProductById, getProductsById } from "../redux/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const ProductDetail = () =>{
    const dispatch = useDispatch();
    const{id} = useParams();

    const {loading, error, singleProduct } = useSelector(useProductById);

    useEffect(() => {
        if(singleProduct && singleProduct.id == id) return;
        dispatch(getProductsById(id));
    }, [id]);

    if (loading) {
        return <p>Loading......</p>
    } 
    if (error) {
        return <p>Error: {error}</p>
    }
    if (!singleProduct) {
        return <p>product not found ....</p>
    }

    return (<div className="products">
        <Link to={"/"}>Home </Link>
                <div className="product" >              
                    <h2 className="product-title">{singleProduct.title}</h2>
                        <img src={singleProduct.image}/>

                </div>         
    </div>);

    
}
export default ProductDetail;