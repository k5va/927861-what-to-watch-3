import MovieCard from "./movie-card";

const movie = {
  title: `Die hard`,
  genre: `Drama`,
  year: 2019,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  description: `Bla Bla Bla`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  rating: {
    score: 8.9,
    count: 240,
    level: `Very good`
  }
};

const handleTitleClick = () => {};
const handleHover = () => {};

it(`MovieCard should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <MovieCard movie={movie} onHover={handleHover} onTitleClick={handleTitleClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
