import {connect} from "react-redux";
import {getAuthorizationStatus, getSimilarMovies} from "@store";
import {AuthorizationStatus} from "@consts";
import MovieDetails from "./movie-details";

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  getSimilarMovies: (movie) => getSimilarMovies(state, movie)
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

