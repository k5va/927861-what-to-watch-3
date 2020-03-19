import {connect} from "react-redux";
import {getFavoriteMovies} from "@store";
import Mylist from "./my-list";

const mapStateToProps = (state) => ({
  movies: getFavoriteMovies(state),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);

