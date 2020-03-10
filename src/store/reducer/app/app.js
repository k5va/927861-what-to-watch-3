import {extend} from "@utils";
import {Genre, DEFAULT_SHOWN_MOVIES_NUMBER, AppState} from "@consts";
import ActionType from "./actions/action-type";

const initialState = {
  appState: AppState.PENDING,
  selectedGenre: Genre.ALL,
  shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_APP_STATE:
      return extend(state, {appState: payload});
    case ActionType.CHANGE_GENRE:
      return extend(state, {selectedGenre: payload});
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {shownMoviesNumber: state.shownMoviesNumber + payload});
    case ActionType.RESET_SHOW_MORE_MOVIES:
      return extend(state, {shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER});
    default:
      return state;
  }
};

export default reducer;
