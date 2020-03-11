import {connect} from "react-redux";
import AddReview from "./add-review";
import {addComment} from "@store";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addReview(rating, comment, movieId) {
    dispatch(addComment(rating, comment, movieId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

