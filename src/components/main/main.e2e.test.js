import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movies title be clicked`, () => {
  const movieTitleClickHandler = jest.fn();
  const mainScreen = shallow(
      <Main promoMovie={promoMovie} movies={movies} movieTitleClickHandler={movieTitleClickHandler} />
  );

  const movieTitles = mainScreen.find(`.small-movie-card__title`);
  movieTitles.forEach((title) => title.props().onClick());

  expect(movieTitleClickHandler.mock.calls.length).toBe(movies.length);
});
