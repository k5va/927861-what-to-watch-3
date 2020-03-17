import {connect} from "react-redux";
import App from "./app";
import {getAppState, getMovie, loadMovies, checkAuthStatus, login} from "@store";

const mapStateToProps = (state) => ({
  appState: getAppState(state),
  getMovie: (id) => getMovie(state, id),
  onVideoPlayerExit: () => history.goBack()
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(checkAuthStatus());
    dispatch(loadMovies());
  },
  login: (authData) => dispatch(login(authData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
