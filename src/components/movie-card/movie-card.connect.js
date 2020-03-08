import {connect} from "react-redux";
import {ActionCreator} from "@store";
import {AppRoute, history} from "@routes";
import MovieCard from "./movie-card";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(ActionCreator.selectMovie(movie));
    history.push(AppRoute.FILM);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

