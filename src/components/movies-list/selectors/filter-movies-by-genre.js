import {Genre} from "@consts";

export default (movies, selectedGenre) => selectedGenre === Genre.ALL ?
  movies :
  movies.filter(({genre}) => genre === selectedGenre);
