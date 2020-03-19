import {connect} from "react-redux";
import {getAuthorizationStatus, getUser} from "@store";
import {AuthorizationStatus} from "@consts";
import {AppRoute, history} from "@routes";
import UserBlock from "./user-block";

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  avatar: getAuthorizationStatus(state) === AuthorizationStatus.AUTH ? getUser(state).avatar : null
});

const mapDispatchToProps = () => ({
  onSignInClick() {
    history.push(AppRoute.SIGN_IN);
  },
  onAvatarClick() {
    history.push(AppRoute.MY_LIST);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);

