import {ActionCreator, handleError} from "@store";
import {AuthorizationStatus} from "@consts";
import {User} from "@models";
import {history, AppRoute} from "@routes";

const login = (authData) => (dispatch, getState, api) => {
  return api.login(authData)
    .then(User.parseUser)
    .then((user) => {
      dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(user));
      history.push(AppRoute.MAIN);
    })
    .catch((err) => dispatch(handleError(err)));
};

export default login;
