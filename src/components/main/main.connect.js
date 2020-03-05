import {connect} from "react-redux";
import Main from "./main";
import {ActionCreator, getPromoMovie} from "@store";
import {AppState} from "@consts";

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayMovie() {
    dispatch(ActionCreator.changeAppState(AppState.VIDEO_PLAYER));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
