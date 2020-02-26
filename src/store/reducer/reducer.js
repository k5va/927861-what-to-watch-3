import {extend, filterMoviesByGenre} from "@utils";
import {Genre} from "@consts";
import {movies} from "@mocks";
import ActionType from "../actions/action-type";

const initialState = {
  selectedGenre: Genre.ALL,
  movies,
  filteredMovies: [...movies],
  selectedMovie: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {selectedGenre: payload});
    case ActionType.FILTER_MOVIES_BY_GENRE:
      return extend(state, {
        filteredMovies: filterMoviesByGenre(state.movies, state.selectedGenre),
      });
    case ActionType.SELECT_MOVIE:
      return extend(state, {selectedMovie: payload});
    default:
      return state;
  }
};
