import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

it(`App should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <App promoMovie={promoMovie} movies={movies} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
