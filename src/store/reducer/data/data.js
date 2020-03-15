import {extend} from "@utils";
import ActionType from "./actions/action-type";
import {handleSetMovieCommentsAction, handleSetFavoriteMovieStatusAction} from "./helpers";

const initialState = {
  movies: [],
  promoMovieId: null
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_MOVIES:
      return extend(state, {movies: payload});
    case ActionType.SET_PROMO_MOVIE_ID:
      return extend(state, {promoMovieId: payload});
    case ActionType.SET_MOVIE_COMMENTS:
      return handleSetMovieCommentsAction(state, payload);
    case ActionType.SET_FAVORITE_MOVIE_STATUS:
      return handleSetFavoriteMovieStatusAction(state, payload);
    default:
      return state;
  }
};

export default reducer;
