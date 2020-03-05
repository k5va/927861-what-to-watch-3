import {ActionCreator} from "@store";
import {Movie} from "@models";
import {AppState} from "@consts";

const loadMovies = () => (dispatch, getState, api) => {
  return api.loadMovies()
    .then((data) => dispatch(ActionCreator.loadMovies(Movie.parseMovies(data))))
    .then(() => api.loadPromoMovie())
    .then((data) => dispatch(ActionCreator.loadPromoMovie(Movie.parseMovie(data))))
    .then(() => dispatch(ActionCreator.changeAppState(AppState.MAIN)))
    .catch((err) => {
      console.log(err); // TODO: dispatch error state
    });
};

export default loadMovies;
