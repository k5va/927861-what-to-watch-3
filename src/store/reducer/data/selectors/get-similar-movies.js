import getMovies from "./get-movies";

const MAX_SIMILAR_MOVIES_NUMBER = 4;

const getSimilarMovies = (state, selectedMovie) => getMovies(state)
    .filter(({id, genre}) => genre === selectedMovie.genre && id !== selectedMovie.id)
    .slice(0, MAX_SIMILAR_MOVIES_NUMBER);

export default getSimilarMovies;
