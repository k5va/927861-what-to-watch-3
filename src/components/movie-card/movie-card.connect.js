import {connect} from "react-redux";
import {ActionCreator} from "@store";
import MovieCard from "./movie-card";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(ActionCreator.selectMovie(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

