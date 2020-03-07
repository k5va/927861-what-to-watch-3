import {ActionCreator, handleError} from "@store";
import {Movie, Comment} from "@models";
import {AppState} from "@consts";

const loadMovies = () => (dispatch, getState, api) => {
  return api.loadMovies()
    .then(Movie.parseMovies)
    .then((movies) => Promise.all(
        movies.map((movie) => api
          .loadComments(movie.id)
          .then(Comment.parseComments)
          .then((comments) => movie.setComments(comments))
        )
    ))
    .then((movies) => dispatch(ActionCreator.loadMovies(movies)))
    .then(() => api.loadPromoMovie())
    .then((data) => dispatch(ActionCreator.loadPromoMovie(Movie.parseMovie(data))))
    .then(() => dispatch(ActionCreator.changeAppState(AppState.MAIN)))
    .catch((err) => dispatch(handleError(err)));
};

export default loadMovies;
