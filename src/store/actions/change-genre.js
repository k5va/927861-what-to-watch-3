import ActionType from "./action-type";

export default (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});
