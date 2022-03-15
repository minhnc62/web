import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../store/movieSlide";
import { useEffect } from "react";
const Movie = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, movie } = useSelector((state) => state.Movie);

    useEffect(() => {
        dispatch(getMovieById(id));
    }, []);

    if (error) {
        return null;
    }
    if (!movie) {
        return null;
    }
    return <main className="main">
        <div className="back">
            <Link to={location.state?.from || "/"}>Back</Link>
            {/* kiểm tra xem đối tượng này có trong location hay không, nếu có thì tham chiếu đến thăng from */}
        </div>
        <div className="movie">
            <h2 className="movie-heading">
                {movie.Title}
            </h2>
            <div className="movie-img"><img src={movie.Poster} alt={movie.Title} /></div>
        </div>
    </main>

};

export default Movie;