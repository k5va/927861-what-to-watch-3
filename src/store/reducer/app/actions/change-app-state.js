import ActionType from "./action-type";

export default (appState) => ({
  type: ActionType.CHANGE_APP_STATE,
  payload: appState
});
