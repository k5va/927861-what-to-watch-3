import {connect} from "react-redux";
import App from "./app";
import {AuthorizationStatus} from "@consts";
import {getAppState, getMovie, loadMovies, checkAuthStatus, login, getAuthorizationStatus} from "@store";

const mapStateToProps = (state) => ({
  appState: getAppState(state),
  getMovie: (id) => getMovie(state, id),
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(checkAuthStatus());
    dispatch(loadMovies());
  },
  login: (authData) => dispatch(login(authData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
