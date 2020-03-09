import getMovies from "./get-movies";
import getSelectedMovie from "../../app/selectors/get-selected-movie";
import {createSelector} from "reselect";

const MAX_SIMILAR_MOVIES_NUMBER = 4;

const getSimilarMovies = createSelector(
    [getMovies, getSelectedMovie],
    (movies, selectedMovie) =>
      movies
        .filter(({id, genre}) => genre === selectedMovie.genre && id !== selectedMovie.id)
        .slice(0, MAX_SIMILAR_MOVIES_NUMBER)
);

export default getSimilarMovies;
