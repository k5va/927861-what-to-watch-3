import {ActionCreator, handleError} from "@store";
import {Comment} from "@models";
import {history, AppRoute, createRoute} from "@routes";

const addComment = (rating, comment, movieId) => (dispatch, getState, api) => {
  return api.addComment(rating, comment, movieId)
    .then(Comment.parseComments)
    .then((comments) => dispatch(ActionCreator.setMovieComments(movieId, comments)))
    .then(() => history.push(createRoute(AppRoute.FILM, movieId)))
    .catch((err) => dispatch(handleError(err)));
};

export default addComment;
