import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

it(`Main should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <Main promoMovie={promoMovie} movies={movies} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
