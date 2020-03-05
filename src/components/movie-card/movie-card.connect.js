import {connect} from "react-redux";
import {ActionCreator} from "@store";
import {AppState} from "@consts";
import MovieCard from "./movie-card";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(ActionCreator.selectMovie(movie));
    dispatch(ActionCreator.changeAppState(AppState.MOVIE_DETAILS));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

