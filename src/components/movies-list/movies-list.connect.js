import {connect} from "react-redux";
import MoviesList from "./movies-list";
import getSimilarMovies from "./selectors/get-similar-movies";

const mapStateToProps = ({selectedMovie, movies, filteredMovies, shownMoviesNumber}) => ({
  movies: selectedMovie ?
    getSimilarMovies(selectedMovie, movies) :
    filteredMovies.slice(0, shownMoviesNumber)
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
