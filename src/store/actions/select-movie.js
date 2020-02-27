import ActionType from "./action-type";

export default (movie) => ({
  type: ActionType.SELECT_MOVIE,
  payload: movie
});
