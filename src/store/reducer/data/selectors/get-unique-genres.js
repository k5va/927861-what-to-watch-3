import {createSelector} from "reselect";
import getMovies from "./get-movies";

const MAX_GENRES_NUMBER = 9;

const getUniqueGenres = createSelector(
    [getMovies],
    (movies) => [...new Set(movies.map(({genre}) => genre))].slice(0, MAX_GENRES_NUMBER)
);

export default getUniqueGenres;
