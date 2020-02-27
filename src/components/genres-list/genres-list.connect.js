import {connect} from "react-redux";
import {ActionCreator} from "@store";
import GenresList from "./genres-list";
import getUniqueGenres from "./selectors/get-unique-genres";

const mapStateToProps = ({movies, selectedGenre}) => ({
  genres: getUniqueGenres(movies),
  selectedGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMoviesByGenre());
    dispatch(ActionCreator.resetShowMoreMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
