import {extend} from "@utils";
import ActionType from "./actions/action-type";
import {handleSetMovieCommentsAction, handleSetFavoriteMovieStatusAction} from "./helpers";

const initialState = {
  movies: [],
  promoMovie: null
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {movies: payload});
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {promoMovie: payload});
    case ActionType.SET_MOVIE_COMMENTS:
      return handleSetMovieCommentsAction(state, payload);
    case ActionType.SET_FAVORITE_MOVIE_STATUS:
      return handleSetFavoriteMovieStatusAction(state, payload);
    default:
      return state;
  }
};

export default reducer;
