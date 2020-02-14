import App from "./app";

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
const handleMovieTitleClick = () => {};

it(`App should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <App promoMovie={promoMovie} movies={movies} onMovieTitleClick={handleMovieTitleClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
