import {connect} from "react-redux";
import App from "./app";
import {getAppState, getSelectedMovie, loadMovies} from "@store";

const mapStateToProps = (state) => ({
  appState: getAppState(state),
  selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(loadMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
