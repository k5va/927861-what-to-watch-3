import {connect} from "react-redux";
import {ActionCreator, getUniqueGenres, getSelectedGenre} from "@store";
import GenresList from "./genres-list";

const mapStateToProps = (state) => ({
  genres: getUniqueGenres(state),
  selectedGenre: getSelectedGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.resetShowMoreMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
