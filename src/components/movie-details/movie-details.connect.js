import {connect} from "react-redux";
import MovieDetails from "./movie-details";
import {getSelectedMovie} from "@store";
import {history, AppRoute} from "@routes";

const mapStateToProps = (state) => ({
  movie: getSelectedMovie(state)
});

const mapDispatchToProps = () => ({
  onPlayMovie() {
    history.push(AppRoute.PLAYER);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
