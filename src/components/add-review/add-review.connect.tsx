import {connect} from "react-redux";
import AddReview from "./add-review";
import {addComment, getAppState} from "@store";
import {AppState} from "@consts";

const mapStateToProps = (state) => ({
  isError: getAppState(state) === AppState.ERROR
});

const mapDispatchToProps = (dispatch) => ({
  addReview(rating, comment, movieId) {
    dispatch(addComment(rating, comment, movieId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

