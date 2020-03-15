import {connect} from "react-redux";
import {getAuthorizationStatus, setFavoriteMovieStatus} from "@store";
import {AuthorizationStatus} from "@consts";
import MylistButton from "./my-list-button";

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(movieId, isFavorite) {
    dispatch(setFavoriteMovieStatus(movieId, !isFavorite));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MylistButton);

