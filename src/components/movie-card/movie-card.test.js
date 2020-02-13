import MovieCard from "./movie-card";

const movie = {
  title: `Movie 1`,
  src: `pic 1`
};

const handleTitleClick = () => {};
const handleHover = () => { };

it(`MovieCard should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <MovieCard movie={movie} onHover={handleHover} onTitleClick={handleTitleClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
