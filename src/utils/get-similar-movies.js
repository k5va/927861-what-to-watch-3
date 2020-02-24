import {movies} from "@mocks";

export default (movie, maxNumber) => movies.filter((item) => item.genre === movie.genre).slice(0, maxNumber);
