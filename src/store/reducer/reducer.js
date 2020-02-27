import {extend} from "@utils";
import {Genre, DEFAULT_SHOWN_MOVIES_NUMBER} from "@consts";
import {movies} from "@mocks";
import ActionType from "../actions/action-type";
import filterMoviesByGenre from "../selectors/filter-movies-by-genre";

const initialState = {
  movies,
  selectedGenre: Genre.ALL,
  selectedMovie: null,
  filteredMovies: [...movies],
  shownMoviesNumber: movies.length > DEFAULT_SHOWN_MOVIES_NUMBER ? DEFAULT_SHOWN_MOVIES_NUMBER : movies.length
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {selectedGenre: payload});
    case ActionType.SELECT_MOVIE:
      return extend(state, {selectedMovie: payload});
    case ActionType.FILTER_MOVIES_BY_GENRE:
      return extend(state, {filteredMovies: filterMoviesByGenre(state.movies, state.selectedGenre)});
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {shownMoviesNumber: state.shownMoviesNumber + payload});
    case ActionType.RESET_SHOW_MORE_MOVIES:
      return extend(state, {shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER});
    default:
      return state;
  }
};
