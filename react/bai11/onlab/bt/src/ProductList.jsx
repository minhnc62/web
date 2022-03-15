import { useSelector, useDispatch } from "react-redux";
import { getProducts, useProductApi } from "./redux/productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(useProductApi);
    
    useEffect(() => {
        if(products.length > 0) return;
        dispatch(getProducts());
    }, []);

    if (loading) {
        return <p>Loading......</p>
    } else if (error) {
        return <p>Error: {error}</p>
    }

    return (<div className="products">
        {
            
            products.map((p) => (
                <div className="product" key={p.id}>
                    <Link to={"/products/" + p.id}>
                    <h2 className="product-title">{p.title}</h2>
                        <img src={p.image}/>
                    </Link>
                    
                </div>
             ))
        }
    </div>);

};

export default ProductList;