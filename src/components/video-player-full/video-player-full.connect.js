import {connect} from "react-redux";
import VideoPlayerFull from "./video-player-full";
import {ActionCreator} from "@store";

const mapStateToProps = ({selectedMovie, promoMovie}) => {
  const {title, duration, src, poster} = selectedMovie ? selectedMovie : promoMovie;
  return {title, duration, src, poster};
};

const mapDispatchToProps = (dispatch) => ({
  onExit() {
    dispatch(ActionCreator.rollback());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerFull);
