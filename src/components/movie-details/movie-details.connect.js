import {connect} from "react-redux";
import MovieDetails from "./movie-details";
import {ActionCreator, getSelectedMovie} from "@store";
import {AppState} from "@consts";

const mapStateToProps = (state) => ({
  movie: getSelectedMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayMovie() {
    dispatch(ActionCreator.changeAppState(AppState.VIDEO_PLAYER));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
