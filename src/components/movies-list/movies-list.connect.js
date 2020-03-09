import {connect} from "react-redux";
import MoviesList from "./movies-list";
import {getMoviesByGenre, getSimilarMovies, getSelectedMovie, getShownMoviesNumber} from "@store";

const mapStateToProps = (state) => ({
  movies: getSelectedMovie(state) ?
    getSimilarMovies(state) :
    getMoviesByGenre(state).slice(0, getShownMoviesNumber(state))
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
