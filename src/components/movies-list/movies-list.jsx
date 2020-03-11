import {MovieCard} from "@components";

const MoviesList = (props) => {
  const {movies, onMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => <MovieCard
        key={movie.id}
        movie={movie}
        onClick={onMovieCardClick}
      />)}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
      })
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default MoviesList;
