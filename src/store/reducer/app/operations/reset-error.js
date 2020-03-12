import {ActionCreator} from "@store";
import {AppState} from "@consts";

const resetError = () => (dispatch) => {
  return dispatch(ActionCreator.changeAppState(AppState.READY));
};

export default resetError;
