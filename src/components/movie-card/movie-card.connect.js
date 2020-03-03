import {connect} from "react-redux";
import {ActionCreator} from "@store";
import {GameScreen} from "@consts";
import MovieCard from "./movie-card";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(ActionCreator.selectMovie(movie));
    dispatch(ActionCreator.changeGameScreen(GameScreen.MOVIE_DETAILS));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

