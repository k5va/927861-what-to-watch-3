import {MovieCard} from "../../components";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleMovieCardHover = this._handleMovieCardHover.bind(this);
  }

  render() {
    const {movies, onMovieClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => <MovieCard
          key={movie.title + i}
          movie={movie}
          onHover={this._handleMovieCardHover}
          onClick={onMovieClick}
        />)}
      </div>
    );
  }

  _handleMovieCardHover(movie) {
    this.setState({activeCard: movie});
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
      })
  ).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MoviesList;
