import {connect} from "react-redux";
import Main from "./main";
import {ActionCreator} from "@store";
import {GameScreen} from "@consts";

const mapStateToProps = ({promoMovie}) => ({
  promoMovie
});

const mapDispatchToProps = (dispatch) => ({
  onPlayMovie() {
    dispatch(ActionCreator.changeGameScreen(GameScreen.VIDEO_PLAYER));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
