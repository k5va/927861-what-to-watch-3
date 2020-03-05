import ActionCreator from "../actions/action-creator";
import {Movie} from "@models";

const loadMovies = () => (dispatch, getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadMovies(Movie.parseMovies(response.data)));
    });
};

export default loadMovies;
