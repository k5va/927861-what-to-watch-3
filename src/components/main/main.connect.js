import {connect} from "react-redux";
import Main from "./main";
import {ActionCreator, getPromoMovie} from "@store";
import {GameScreen} from "@consts";

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayMovie() {
    dispatch(ActionCreator.changeGameScreen(GameScreen.VIDEO_PLAYER));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
