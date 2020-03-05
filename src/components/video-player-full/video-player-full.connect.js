import {connect} from "react-redux";
import VideoPlayerFull from "./video-player-full";
import {ActionCreator, getPromoMovie, getSelectedMovie} from "@store";

const mapStateToProps = (state) => {
  const {title, duration, src, poster} = getSelectedMovie(state) ?
    getSelectedMovie(state) :
    getPromoMovie(state);
  return {title, duration, src, poster};
};

const mapDispatchToProps = (dispatch) => ({
  onExit() {
    dispatch(ActionCreator.rollback());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerFull);
