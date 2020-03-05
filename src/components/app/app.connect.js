import {connect} from "react-redux";
import App from "./app";
import {getAppState, getSelectedMovie, loadMovies, loadPromoMovie} from "@store";

const mapStateToProps = (state) => ({
  appState: getAppState(state),
  selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(loadMovies());
    dispatch(loadPromoMovie());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
