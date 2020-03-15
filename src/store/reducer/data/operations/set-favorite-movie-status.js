import {ActionCreator, handleError, resetError} from "@store";

const FavoriteMovieStatus = {
  TRUE: 1,
  FALSE: 0
};

const setFavoriteMovieStatus = (movieId, isFavorite) => (dispatch, getState, api) => {
  resetError();
  return api.setFavoriteMovieStatus(movieId, isFavorite ? FavoriteMovieStatus.TRUE : FavoriteMovieStatus.FALSE)
    .then(() => dispatch(ActionCreator.setFavoriteMovieStatus(movieId, isFavorite)))
    .catch((err) => dispatch(handleError(err)));
};

export default setFavoriteMovieStatus;
