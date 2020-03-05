import {extend} from "@utils";
import ActionType from "./actions/action-type";

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
    default:
      return state;
  }
};

export default reducer;
