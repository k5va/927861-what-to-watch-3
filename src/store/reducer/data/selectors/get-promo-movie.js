import getMovies from "./get-movies";
import getPromoMovieId from "./get-promo-movie-id";
import {createSelector} from "reselect";

const getPromoMovie = createSelector(
    [getMovies, getPromoMovieId],
    (movies, promoMovieId) => movies.filter(({id}) => id === promoMovieId)[0]
);

export default getPromoMovie;
