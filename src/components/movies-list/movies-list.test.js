import {MoviesList} from "@components";
import {generateId} from "@utils";

const movies = [
  {
    id: generateId(),
    title: `Die hard 1`,
    genre: `Drama`,
    year: 2019,
    cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `Bla Bla Bla`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: {
      score: 8.9,
      count: 240
    }
  },
  {
    id: generateId(),
    title: `Die hard 2`,
    genre: `Drama`,
    year: 2019,
    cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `Bla Bla Bla`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: {
      score: 8.9,
      count: 240
    }
  },
  {
    id: generateId(),
    title: `Die hard 3`,
    genre: `Drama`,
    year: 2019,
    cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `Bla Bla Bla`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: {
      score: 8.9,
      count: 240
    }
  }
];
const handleMovieClick = () => {};

it(`MoviesList should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <MoviesList movies={movies} onMovieClick={handleMovieClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
