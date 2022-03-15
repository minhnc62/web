import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovieByPage } from "../store/movieSlide";
export default ({ page, currentPage }) => {

    const dispatch = useDispatch();

    
    return <Link to={"?page=" + page} className={currentPage == page ? "active" : ""}
        onClick={() => dispatch(getMovieByPage({page}))}>
        {" "}{page}
    </Link>
}