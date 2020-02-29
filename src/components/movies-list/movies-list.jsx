import {MovieCard} from "@components";

class MoviesList extends React.PureComponent {
  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => <MovieCard
          key={movie.id}
          movie={movie}
        />)}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MoviesList;
