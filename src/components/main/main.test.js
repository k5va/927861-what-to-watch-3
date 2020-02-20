import {Main} from "@components";

const movies = [
  {
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
      count: 240,
      level: `Very good`
    }
  },
  {
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
      count: 240,
      level: `Very good`
    }
  },
  {
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
      count: 240,
      level: `Very good`
    }
  }
];
const promoMovie = {
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

const handleMovieClick = () => {};

it(`Main should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <Main promoMovie={promoMovie} movies={movies} onMovieClick={handleMovieClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
