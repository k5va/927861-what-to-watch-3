import {connect} from "react-redux";
import MoviesList from "./movies-list";
import filterMoviesByGenre from "./selectors/filter-movies-by-genre";
import getSimilarMovies from "./selectors/get-similar-movies";

const mapStateToProps = (state) => ({
  movies: state.selectedMovie ?
    getSimilarMovies(state.selectedMovie, state.movies) :
    filterMoviesByGenre(state.movies, state.selectedGenre)
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
