import {extend} from "@utils";

const initialState = {
  movies: [],
  promoMovie: null
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`
};

const ActionCreator = {
  loadMovies(movies) {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadPromoMovie(movie) {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: movie,
    };
  }
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: payload,
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
