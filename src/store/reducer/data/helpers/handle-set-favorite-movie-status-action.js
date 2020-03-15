import {extend} from "@utils";
import getMovieIndex from "./get-movie-index";

const handleSetFavoriteMovieStatusAction = (state, payload) => {
  const {movieId, isFavorite} = payload;
  const {movies} = state;
  const movieIndex = getMovieIndex(state, movieId);
  const updatedMovie = movies[movieIndex];
  updatedMovie.isFavorite = isFavorite;
  return extend(
      state,
      {movies: [...movies.slice(0, movieIndex), updatedMovie, ...movies.slice(movieIndex + 1)]}
  );
};

export default handleSetFavoriteMovieStatusAction;
