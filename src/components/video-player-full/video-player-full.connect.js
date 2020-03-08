import {connect} from "react-redux";
import VideoPlayerFull from "./video-player-full";
import {getPromoMovie, getSelectedMovie} from "@store";
import {history} from "@routes";

const mapStateToProps = (state) => {
  const {title, duration, src, poster} = getSelectedMovie(state) ?
    getSelectedMovie(state) :
    getPromoMovie(state);
  return {title, duration, src, poster};
};

const mapDispatchToProps = () => ({
  onExit() {
    history.goBack();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerFull);
