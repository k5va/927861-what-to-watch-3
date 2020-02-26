import {connect} from "react-redux";
import MoviesList from "./movies-list";

const mapStateToProps = (state) => ({
  movies: state.filteredMovies
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
