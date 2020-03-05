import ActionType from "./action-type";

const loadMovies = (movies) => {
  return {
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  };
};

export default loadMovies;
