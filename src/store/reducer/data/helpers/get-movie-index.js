const getMovieIndex = ({movies}, movieId) => movies.findIndex(({id}) => id === movieId);

export default getMovieIndex;
