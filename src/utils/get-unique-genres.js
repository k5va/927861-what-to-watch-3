const MAX_GENRES_NUMBER = 9;

export default (movies) => [...new Set(movies.map(({genre}) => genre))].slice(0, MAX_GENRES_NUMBER);
