import MoviesList from "./movies-list";

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
const handleMovieTitleClick = () => { };

it(`MoviesList should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <MoviesList movies={movies} onMovieTitleClick={handleMovieTitleClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
