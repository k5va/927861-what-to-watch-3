import {connect} from "react-redux";
import MovieDetails from "./movie-details";
import {ActionCreator} from "@store";
import {AppState} from "@consts";

const mapStateToProps = ({selectedMovie}) => ({
  movie: selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  onPlayMovie() {
    dispatch(ActionCreator.changeAppState(AppState.VIDEO_PLAYER));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
