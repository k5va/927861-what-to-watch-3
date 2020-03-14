import getMovies from "./get-movies";
import {createSelector} from "reselect";

const getFavoriteMovies = createSelector(
    [getMovies],
    (movies) => movies.filter(({isFavorite}) => isFavorite)
);

export default getFavoriteMovies;
