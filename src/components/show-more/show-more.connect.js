import {connect} from "react-redux";
import {ActionCreator, getMoviesByGenre, getShownMoviesNumber} from "@store";
import ShowMore from "./show-more";

const mapStateToProps = (state) => ({
  isVisible: getMoviesByGenre(state).length > getShownMoviesNumber(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.showMoreMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);

