import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useSearchParams , useLocation} from "react-router-dom";
import Button from "../component/Button";
import {getMovieByPage, searchMovieByTitle} from "../store/movieSlide";
const Home = () => {
    const dispatch = useDispatch();
    const { loading, error ,movies, totalResults, page } = useSelector((state) => state.movie);
    const [searchParam, setSearchParam] = useSearchParams();

    const location = useLocation(); 
    const pageParam = searchParam.get("page")
    useEffect(()=>{
        if(pageParam){
            dispatch(getMovieByPage({page: pageParam}));

        }
    },[pageParam])

    const totalPage = Math.ceil(totalResults/10);// làm tròn lên
    const pagination = [];
    for(let i=1;i<=totalPage; i++){
        pagination.push(<Button key={i} page={i} currentPage={page}></Button>)
    };

    if(loading == "pending"){
        return <p>Loading ...</p>
    }
    if(error){
        return null;
    }

    return <main className="main">
        <section className="section">
            {
                movies.map(movie => (
                    <Link to={"/movie" + movie.imdbID} key={movie.imdbID} state={{from: location}}>
                        <div className="movie" >
                            <div className="movie-thumb" >
                                <img src={movie.Poster} alt={movie.Title} />
                            </div>
                            <div className="movie-info">
                                <h2 className="movie-title">{movie.Title}</h2>
                                <span className="movie-year">{movie.Year}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </section>
        <section className="pagination">
            {pagination}
        </section>
    </main>
};

export default Home;