import App from "./app";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};
const handleMovieTitleClick = () => {};

it(`App should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <App promoMovie={promoMovie} movies={movies} onMovieTitleClick={handleMovieTitleClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
