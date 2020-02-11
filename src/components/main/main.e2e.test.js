import {shallow} from "enzyme";
import Main from "./main.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

it(`Should movies title be clicked`, () => {
  const movieTitleClickHandler = jest.fn();
  const mainScreen = shallow(
      <Main promoMovie={promoMovie} movies={movies} movieTitleClickHandler={movieTitleClickHandler} />
  );

  const movieTitles = mainScreen.find(`.small-movie-card__title`);
  movieTitles.forEach((title) => title.props().onClick());

  expect(movieTitleClickHandler.mock.calls.length).toBe(movies.length);
});
