import ActionType from "./action-type";

export default (gameScreen) => ({
  type: ActionType.CHANGE_GAME_SCREEN,
  payload: gameScreen
});
