import {MovieCard} from "@components";
import {connect} from "react-redux";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleMovieCardHover = this._handleMovieCardHover.bind(this);
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => <MovieCard
          key={movie.id}
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
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
      })
  ).isRequired
};

const mapStateToProps = (state) => ({
  movies: state.filteredMovies
});

const mapDispatchToProps = () => ({
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
