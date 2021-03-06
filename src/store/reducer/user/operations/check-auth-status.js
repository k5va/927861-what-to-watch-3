import {ActionCreator, handleError} from "@store";
import {AuthorizationStatus} from "@consts";
import {User} from "@models";

const checkAuthStatus = () => (dispatch, getState, api) => {
  return api.checkAuthorizationStatus()
    .then(User.parseUser)
    .then((user) => {
      dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(user));
    })
    .catch((err) => dispatch(handleError(err)));
};

export default checkAuthStatus;
