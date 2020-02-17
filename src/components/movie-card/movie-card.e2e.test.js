import {shallow} from "enzyme";
import MovieCard from "./movie-card";

const HANDLE_HOVER_CALL_COUNT = 1;

const movie = {
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

const handleTitleClick = () => {};

it(`Card hover passes movie object to callback`, () => {
  const handleHover = jest.fn();

  const screen = shallow(
      <MovieCard movie={movie} onHover={handleHover} onTitleClick={handleTitleClick} />
  );

  const movieCard = screen.find(`.small-movie-card`);
  movieCard.simulate(`mouseover`, mockEvent);

  expect(handleHover).toHaveBeenCalledTimes(HANDLE_HOVER_CALL_COUNT);
  expect(handleHover.mock.calls[0][0]).toMatchObject(movie);
});
