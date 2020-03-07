import {ActionCreator} from "@store";
import {AppState, AuthorizationStatus} from "@consts";
import {User} from "@models";

const login = (authData) => (dispatch, getState, api) => {
  return api.login(authData)
    .then(User.parseUser)
    .then((user) => {
      dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(user));
      dispatch(ActionCreator.changeAppState(AppState.MAIN));
    })
    .catch((err) => console.log(err));
};

export default login;
