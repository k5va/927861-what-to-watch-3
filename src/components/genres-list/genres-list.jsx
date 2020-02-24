import {Genre} from "@consts";
import {getUniqueGenres} from "@utils";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const GenresList = (props) => {
  const {movies, selectedGenre, onGenreSelect} = props;
  const genres = getUniqueGenres(movies);

  const handleGenreClick = (evt, genre) => {
    evt.preventDefault();
    if (genre !== selectedGenre) {
      onGenreSelect(genre);
    }
  };

  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${selectedGenre === Genre.ALL ? `catalog__genres-item--active` : ``}`}
        onClick={(evt) => handleGenreClick(evt, Genre.ALL)}
      >
        <a href="#" className="catalog__genres-link">{Genre.ALL}</a>
      </li>
      {genres.map((genre, i) => (
        <li
          key={genre + i}
          className={`catalog__genres-item ${selectedGenre === genre ? `catalog__genres-item--active` : ``}`}
          onClick={(evt) => handleGenreClick(evt, genre)}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })
  ).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onGenreSelect: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  selectedGenre: state.selectedGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMoviesByGenre()); // TODO: Make all in one call?
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
