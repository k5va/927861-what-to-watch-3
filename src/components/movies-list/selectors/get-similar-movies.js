const MAX_SIMILAR_MOVIES_NUMBER = 4;

export default (movie, movies, maxNumber = MAX_SIMILAR_MOVIES_NUMBER) =>
  movies.filter(({id, genre}) => genre === movie.genre && id !== movie.id).slice(0, maxNumber);
