import ActionType from "./action-type";

const setFavoriteMovieStatus = (movieId, isFavorite) => {
  return {
    type: ActionType.SET_FAVORITE_MOVIE_STATUS,
    payload: {movieId, isFavorite}
  };
};

export default setFavoriteMovieStatus;
