import ActionCreator from "../actions/action-creator";
import {promoMovie} from "@mocks";

const loadPromoMovie = () => (dispatch, getState, api) => {
  return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromoMovie(Object.assign({}, promoMovie, {title: response.data.name}))); // TODO: change to response.data with adapter
    });
};

export default loadPromoMovie;
