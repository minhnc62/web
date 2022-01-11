const Form = () =>{
    
    const [text,setText] = React.useState(" ");
    const [products,setProducts] = React.useState([]);

    React.useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`)
        .then((res)=>res.json())
        .then((json)=>{
            setProducts(json);
        });

    },[])
      const  handleSubmit = (e) =>{
        //khi submit không load lại trang
        e.preventDefault();  
    };
        return(<div>
            <form className="form" action="" onSubmit={handleSubmit}>
            <input placeholder="Tên món ăn" className="input" type="text"
                   value={text}
                   onChange={(e)=>setText(e.target.value)}    
            />
            <button className="btn-add">Add</button>
            </form>
            <div className="product">
                {products.map((product) =>{
                    <div key={product.idMeal} >{product.strMeal}</div>
                })}
            </div>
        </div>
            
        );
    
    
};