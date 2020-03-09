import {ActionCreator} from "@store";
import {AppState, AuthorizationStatus, ErrorCode} from "@consts";

const handleError = (err) => (dispatch) => {
  if (err.response.status === ErrorCode.UNAUTHORIZED) {
    return dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
  }

  return dispatch(ActionCreator.changeAppState(AppState.ERROR));
};

export default handleError;
