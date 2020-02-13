import {shallow} from "enzyme";
import Main from "./main.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

it(`Should movies title be clicked`, () => {
  const handleMovieTitleClick = jest.fn();
  const mainScreen = shallow(
      <Main promoMovie={promoMovie} movies={movies} onMovieTitleClick={handleMovieTitleClick} />
  );

  const movieTitles = mainScreen.find(`.small-movie-card__title`);
  movieTitles.forEach((title) => title.props().onClick());

  expect(handleMovieTitleClick.mock.calls.length).toBe(movies.length);
});
