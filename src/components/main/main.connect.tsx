import {connect} from "react-redux";
import Main from "./main";
import {getPromoMovie, getMoviesByGenre, getShownMoviesNumber} from "@store";

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  movies: getMoviesByGenre(state).slice(0, getShownMoviesNumber(state))
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
