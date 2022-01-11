const {useEffect, useState, useRef } = React ;

const app = document.getElementById("app");

const randomURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const searchURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Spinner = ()=>{
    return <i className="loading bi bi-arrow-clockwise"></i>
}

const Meal = ({meal}) =>{
    return (
        <div className="meal">
            <h1 className="title">{meal.strMeal}</h1>
            <img className="thumb" src={meal.strMealThumb} alt={meal.strMeal} />
            <p className="instructions">{meal.strInstructions}</p>
        </div>
    );
}

const App = ()=>{


    const [loading, setLoading] = useState(true);
    const [meal, setMeal] = useState(null);
    const [keyword, setKeyword] = useState("");

    const getRandomMeal = ()=>{
        setLoading(true);

        fetch(randomURL)
            .then((res)=>res.json())
            .then((meal)=>{
                setMeal(meal.meals[0]);
                setLoading(false);
            });
        

    };
    //load ra một món ngẫu nhiên đầu tiên
    useEffect(()=>{
        getRandomMeal();
    },[]);  //chỉ load 1 lần
    
    //load món ăn khi nhập 
    useEffect(()=>{
        const controller = new AbortController();
        if(keyword !== ""){
            setLoading(true);

            fetch(searchURL + keyword , {signal: controller.signal})
                .then((res)=>res.json())
                .then((meal)=>{
                    setMeal(meal.meals[0]);
                    setLoading(false);
                });
        }

        return ()=>{
            controller.abort();
            setLoading(false);
        };
    }, [keyword]);



    return(
        
        <div>
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        Meal Finer
                    </h1>
                    <input className="input-search" placeholder="Nhập tên món ăn"  autoComplete= "off" type="text" 
                    value={keyword} 
                    onChange={(e)=>setKeyword(e.target.value.trim())}
                    />  
                    <button className="button-search">
                        <i className="bi bi-search"></i>
                    </button>
                    <button className="button-random" onClick={getRandomMeal}>
                        <i className="bi bi-shuffle"></i>
                    </button>
                </div>
                <div className="main">
                    {loading ? <Spinner/> : <Meal meal={meal}/>}
                </div>
            </div>
        </div>
        
    );
}

ReactDOM.render(<App />,app);



