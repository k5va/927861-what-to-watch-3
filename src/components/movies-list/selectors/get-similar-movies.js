const MAX_SIMILAR_MOVIES_NUMBER = 4;

export default (movie, movies, maxNumber = MAX_SIMILAR_MOVIES_NUMBER) =>
  movies.filter((item) => item.genre === movie.genre).slice(0, maxNumber);
