import {extend} from "@utils";
import {Genre} from "@consts";
import {movies} from "@mocks";
import ActionType from "../actions/action-type";

const initialState = {
  movies,
  selectedGenre: Genre.ALL,
  selectedMovie: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {selectedGenre: payload});
    case ActionType.SELECT_MOVIE:
      return extend(state, {selectedMovie: payload});
    default:
      return state;
  }
};
