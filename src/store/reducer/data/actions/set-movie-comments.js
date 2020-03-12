import ActionType from "./action-type";

const setMovieComments = (movieId, comments) => {
  return {
    type: ActionType.SET_MOVIE_COMMENTS,
    payload: {movieId, comments},
  };
};

export default setMovieComments;
