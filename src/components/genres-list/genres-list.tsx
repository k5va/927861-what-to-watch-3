import * as React from "react";
import {Genre} from "@consts";

interface Props {
  genres: Array<string>,
  selectedGenre: string,
  onGenreSelect: (genre: string) => void
};

const GenresList: React.FunctionComponent<Props> = (props: Props) => {
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

export default GenresList;
