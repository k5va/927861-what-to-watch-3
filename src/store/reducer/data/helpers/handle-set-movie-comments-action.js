import {extend} from "@utils";
import getMovieIndex from "./get-movie-index";

const handleSetMovieCommentsAction = (state, payload) => {
  const {movieId, comments} = payload;
  const {movies} = state;
  const movieIndex = getMovieIndex(state, movieId);
  const updatedMovie = movies[movieIndex];
  updatedMovie.comments = comments;
  return extend(
      state,
      {movies: [...movies.slice(0, movieIndex), updatedMovie, ...movies.slice(movieIndex + 1)]}
  );
};

export default handleSetMovieCommentsAction;
