import {extend} from "@utils";
import {Genre, DEFAULT_SHOWN_MOVIES_NUMBER, GameScreen} from "@consts";
import ActionType from "./actions/action-type";

const initialState = {
  gameScreen: GameScreen.MAIN,
  history: [],
  selectedGenre: Genre.ALL,
  selectedMovie: null,
  shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
};

const reducer = (state = initialState, {type, payload}) => {
  state.history.push({type, payload});

  switch (type) {
    case ActionType.CHANGE_GAME_SCREEN:
      return extend(state, {gameScreen: payload});
    case ActionType.CHANGE_GENRE:
      return extend(state, {selectedGenre: payload});
    case ActionType.SELECT_MOVIE:
      return extend(state, {selectedMovie: payload});
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {shownMoviesNumber: state.shownMoviesNumber + payload});
    case ActionType.RESET_SHOW_MORE_MOVIES:
      return extend(state, {shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER});
    case ActionType.ROLLBACK:
      state.history.pop();
      state.history.pop();
      return reducer(state, state.history.pop());
    default:
      return reducer(state, {type: ActionType.CHANGE_GAME_SCREEN, payload: GameScreen.MAIN});
  }
};

export default reducer;
