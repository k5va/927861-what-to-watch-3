import {connect} from "react-redux";
import MovieDetails from "./movie-details";
import {ActionCreator} from "@store";
import {GameScreen} from "@consts";

const mapStateToProps = ({selectedMovie}) => ({
  movie: selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  onPlayMovie() {
    dispatch(ActionCreator.changeGameScreen(GameScreen.VIDEO_PLAYER));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
