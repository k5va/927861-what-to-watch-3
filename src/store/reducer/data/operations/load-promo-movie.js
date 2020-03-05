import ActionCreator from "../actions/action-creator";
import {Movie} from "@models";

const loadPromoMovie = () => (dispatch, getState, api) => {
  return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromoMovie(Movie.parseMovie(response.data)));
    });
};

export default loadPromoMovie;
