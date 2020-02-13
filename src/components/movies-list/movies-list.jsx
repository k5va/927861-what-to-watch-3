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
    const {movies, onMovieTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => <MovieCard
          key={movie.title + i}
          movie={movie}
          onHover={this._handleMovieCardHover}
          onTitleClick={onMovieTitleClick}
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
        src: PropTypes.string.isRequired
      })
  ).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
