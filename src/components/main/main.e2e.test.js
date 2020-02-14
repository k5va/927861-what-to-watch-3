import {mount} from "enzyme";
import Main from "./main.jsx";

const movies = [
  {
    title: `Movie 1`,
    src: `pic 1`
  },
  {
    title: `Movie 2`,
    src: `pic 2`
  },
  {
    title: `Movie 3`,
    src: `pic 3`
  }
];

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

const mockEvent = {
  preventDefault() {},
};

it(`Should movies title be clicked`, () => {
  const handleMovieTitleClick = jest.fn();
  const mainScreen = mount(
      <Main promoMovie={promoMovie} movies={movies} onMovieTitleClick={handleMovieTitleClick} />
  );

  const movieTitles = mainScreen.find(`.small-movie-card__link`);
  movieTitles.forEach((title) => title.simulate(`click`, mockEvent));
  expect(handleMovieTitleClick.mock.calls.length).toBe(movies.length);
});
