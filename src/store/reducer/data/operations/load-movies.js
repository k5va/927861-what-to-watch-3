import ActionCreator from "../actions/action-creator";
import {movies} from "@mocks";

const loadMovies = () => (dispatch, getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadMovies(movies)); // TODO: change to response.data with adapter
    });
};

export default loadMovies;
