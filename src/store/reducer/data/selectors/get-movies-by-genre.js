import {Genre} from "@consts";
import getMovies from "./get-movies";
import getSelectedGenre from "../../app/selectors/get-selected-genre";
import {createSelector} from "reselect";

const getMoviesByGenre = createSelector(
    [getMovies, getSelectedGenre],
    (movies, selectedGenre) => selectedGenre === Genre.ALL ?
      movies :
      movies.filter(({genre}) => genre === selectedGenre)
);

export default getMoviesByGenre;
