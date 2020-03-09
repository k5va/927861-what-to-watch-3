import {extend} from "@utils";
import {AuthorizationStatus} from "@consts";
import ActionType from "./actions/action-type";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {authorizationStatus: payload});
    case ActionType.SET_USER:
      return extend(state, {user: payload});
    default:
      return state;
  }
};

export default reducer;
