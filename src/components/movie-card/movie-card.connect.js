import {connect} from "react-redux";
import {AppRoute, history, createRoute} from "@routes";
import MovieCard from "./movie-card";

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
  onClick(movie) {
    history.push(createRoute(AppRoute.FILM, movie.id)); // TODO: no need to connect to store anymore
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

