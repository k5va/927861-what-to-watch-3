import {connect} from "react-redux";
import App from "./app";
import {getAppState, getMovie, loadMovies, checkAuthStatus, login, getSimilarMovies} from "@store";
import {history, AppRoute, createRoute} from "@routes";

const mapStateToProps = (state) => ({
  appState: getAppState(state),
  getMovie: (id) => getMovie(state, id),
  onPlayMovie: (id) => history.push(createRoute(AppRoute.PLAYER, id)),
  onVideoPlayerExit: () => history.goBack(),
  getSimilarMovies: (movie) => getSimilarMovies(state, movie)
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(checkAuthStatus());
    dispatch(loadMovies());
  },
  login: (authData) => dispatch(login(authData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
