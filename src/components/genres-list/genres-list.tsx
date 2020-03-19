import {Genre} from "@consts";

const GenresList = (props) => {
  const {genres, selectedGenre, onGenreSelect} = props;

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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onGenreSelect: PropTypes.func.isRequired
};

export default GenresList;
