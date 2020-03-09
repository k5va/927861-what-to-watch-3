import ActionType from "./action-type";

const setAuthorizationStatus = (status) => {
  return {
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: status
  };
};

export default setAuthorizationStatus;
