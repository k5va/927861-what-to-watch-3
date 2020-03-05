import ActionType from "./action-type";

const loadPromoMovie = (movie) => {
  return {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  };
};

export default loadPromoMovie;
