import {connect} from "react-redux";
import App from "./app";
import {getAppState, getMovie, loadMovies, checkAuthStatus, login} from "@store";
import {history, AppRoute, createRoute} from "@routes";

const mapStateToProps = (state) => ({
  appState: getAppState(state),
  getMovie: (id) => getMovie(state, id),
  onPlayMovie: (id) => history.push(createRoute(AppRoute.PLAYER, id)),
  onVideoPlayerExit: () => history.goBack(),
  onMovieCardClick: ({id}) => history.push(createRoute(AppRoute.FILM, id)) // why here?
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(checkAuthStatus());
    dispatch(loadMovies());
  },
  login: (authData) => dispatch(login(authData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
