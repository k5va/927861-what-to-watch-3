import getMovies from "./get-movies";

const getMovie = (state, movieId) => getMovies(state).filter(({id}) => id === movieId)[0];

export default getMovie;
