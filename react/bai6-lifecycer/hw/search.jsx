
const searchApp = document.getElementById("search-app");

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

class AppSearch extends React.Component{

     state = {
        loading : true,
        meal : null,
        keyword : "",
    }
    // const [loading, setLoading] = useState(true);
    // const [meal, setMeal] = useState(null);
    // const [keyword, setKeyword] = useState("");

     getRandomMeal = ()=>{
        this.setState({loading:true,});


        fetch(randomURL)
            .then((res)=>res.json())
            .then((meal)=>{
                this.setState({meal: meal.meals[0],loading:false});
                
            });
        

    };

    componentDidMount = ()=>{
        this.getRandomMeal();
     

    }
    componentDidUpdate = ()=>{
        const controller = new AbortController();
        if(this.state.keyword !== ""){
            this.setState({loading:true});

            fetch(searchURL + this.setState.keyword , {signal: controller.signal})
                .then((res)=>res.json())
                .then((meal)=>{
                    this.setState({meal: meal.meals[0],loading:false});

                });
    }
         return ()=>{
            controller.abort();
            this.setState({loading:false});

        };
}

  


    render (){
        return(
        
            <div>
                <div className="container">
                    <div className="header">
                        <h1 className="heading">
                            Meal Finer (class)
                        </h1>
                        <input className="input-search" placeholder="Nhập tên món ăn"   type="text" 
                        value={this.state.keywordkeyword} 
                        onChange={(e)=>this.setState({keyword:e.target.value.trim()})}
                        />  
                        <button className="button-search" >
                            <i className="bi bi-search"></i>
                        </button>
                        <button className="button-random" onClick={this.getRandomMeal}>
                            <i className="bi bi-shuffle"></i>
                        </button>
                    </div>
                    <div className="main">
                        {this.state.loading ? <Spinner/> : <Meal meal={this.state.meal}/>}
                    </div>
                </div>
            </div>
            
        );
    }
    
}

ReactDOM.render(<AppSearch />,searchApp);



