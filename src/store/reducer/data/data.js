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
    case ActionType.SET_MOVIE_COMMENTS:
      const {movieId, comments} = payload;
      const {movies} = state;
      const movieIndex = movies.findIndex(({id}) => id === movieId);
      const updatedMovie = movies[movieIndex];
      updatedMovie.comments = comments;
      return extend(
          state,
          {movies: [...movies.slice(0, movieIndex), updatedMovie, ...movies.slice(movieIndex + 1)]}
      );
    default:
      return state;
  }
};

export default reducer;
