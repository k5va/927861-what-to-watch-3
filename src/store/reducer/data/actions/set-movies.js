import ActionType from "./action-type";

const setMovies = (movies) => {
  return {
    type: ActionType.SET_MOVIES,
    payload: movies,
  };
};

export default setMovies;
