import {extend, filterMoviesByGenre} from "@utils";
import {Genre} from "@consts";
import {movies} from "@mocks";

const initialState = {
  selectedGenre: Genre.ALL,
  movies,
  filteredMovies: [...movies],
  selectedMovie: null
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_MOVIES_BY_GENRE: `FILTER_MOVIES_BY_GENRE`,
  SELECT_MOVIE: `SELECT_MOVIE`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  filterMoviesByGenre: () => ({
    type: ActionType.FILTER_MOVIES_BY_GENRE
  }),
  selectMovie: (movie) => ({
    type: ActionType.SELECT_MOVIE,
    payload: movie
  })
};

const reducer = (state = initialState, {type, payload}) => {
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


export {reducer, ActionType, ActionCreator};
