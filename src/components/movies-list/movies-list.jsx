import {MovieCard} from "../../components";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleMovieTitleClick = this._handleMovieCardHover.bind(this);
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => <MovieCard
          key={movie.title + i}
          movie={movie}
          onHover={this._handleMovieCardHover}
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
  ).isRequired
};

export default MoviesList;
