import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import GenresList from "./genres-list";

const mapStateToProps = (state) => ({
  movies: state.movies,
  selectedGenre: state.selectedGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMoviesByGenre());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
