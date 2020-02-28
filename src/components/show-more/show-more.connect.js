import {connect} from "react-redux";
import {ActionCreator} from "@store";
import ShowMore from "./show-more";

const mapStateToProps = ({filteredMovies, shownMoviesNumber}) => ({
  isVisible: filteredMovies.length > shownMoviesNumber
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.showMoreMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);

