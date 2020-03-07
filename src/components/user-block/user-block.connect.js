import {connect} from "react-redux";
import {ActionCreator, getAuthorizationStatus, getUser} from "@store";
import {AppState, AuthorizationStatus} from "@consts";
import UserBlock from "./user-block";

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  avatar: getAuthorizationStatus(state) === AuthorizationStatus.AUTH ? getUser(state).avatar : null
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(ActionCreator.changeAppState(AppState.SIGN_IN));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);

