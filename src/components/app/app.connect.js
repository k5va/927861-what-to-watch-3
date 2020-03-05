import {connect} from "react-redux";
import App from "./app";
import {getAppScreen, getSelectedMovie} from "@store";

const mapStateToProps = (state) => ({
  gameScreen: getAppScreen(state),
  selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
