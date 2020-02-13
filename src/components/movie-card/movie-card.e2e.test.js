import {shallow} from "enzyme";
import MovieCard from "./movie-card";

const HANDLE_HOVER_CALL_COUNT = 1;

const movie = {
  title: `Movie 1`,
  src: `pic 1`
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
