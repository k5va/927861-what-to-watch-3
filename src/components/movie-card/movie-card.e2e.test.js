import {shallow} from "enzyme";
import {MovieCard} from "@components";
import {generateId} from "@utils";

const HANDLE_HOVER_CALL_COUNT = 1;
const HANDLE_CLICK_CALL_COUNT = 2;

const movie = {
  id: generateId(),
  title: `Die hard`,
  genre: `Drama`,
  year: 2019,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  description: `Bla Bla Bla`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  rating: {
    score: 8.9,
    count: 240,
    level: `Very good`
  }
};

const mockEvent = {
  preventDefault() {},
};

it(`Card hover passes movie object to callback`, () => {
  const handleHover = jest.fn();
  const handleMovieClick = () => {};

  const screen = shallow(
      <MovieCard movie={movie} onHover={handleHover} onClick={handleMovieClick} />
  );

  const movieCard = screen.find(`.small-movie-card`);
  movieCard.simulate(`mouseover`, mockEvent);

  expect(handleHover).toHaveBeenCalledTimes(HANDLE_HOVER_CALL_COUNT);
  expect(handleHover.mock.calls[0][0]).toMatchObject(movie);
});

it(`Movie title or image click passes movie object to callback`, () => {
  const handleHover = () => {};
  const handleMovieClick = jest.fn();

  const screen = shallow(
      <MovieCard movie={movie} onHover={handleHover} onClick={handleMovieClick} />
  );

  const movieImage = screen.find(`.small-movie-card__image`);
  movieImage.simulate(`click`, mockEvent);
  const movieTitle = screen.find(`.small-movie-card__link`);
  movieTitle.simulate(`click`, mockEvent);

  expect(handleMovieClick).toHaveBeenCalledTimes(HANDLE_CLICK_CALL_COUNT);
  expect(handleMovieClick.mock.calls[0][0]).toMatchObject(movie);
  expect(handleMovieClick.mock.calls[1][0]).toMatchObject(movie);
});
