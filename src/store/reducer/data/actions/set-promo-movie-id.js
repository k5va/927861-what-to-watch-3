import ActionType from "./action-type";

const setPromoMovieId = (movieId) => {
  return {
    type: ActionType.SET_PROMO_MOVIE_ID,
    payload: movieId,
  };
};

export default setPromoMovieId;
