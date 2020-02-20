import {Main} from "@components";
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
const promoMovie = {
  id: generateId(),
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
    count: 240
  }
};

const mockEvent = {
  preventDefault() {},
};

it(`Should movies title be clicked`, () => {
  const handleMovieClick = jest.fn();
  const mainScreen = mount(
      <Main promoMovie={promoMovie} movies={movies} onMovieClick={handleMovieClick} />
  );

  const movieTitles = mainScreen.find(`.small-movie-card__link`);
  movieTitles.forEach((title) => title.simulate(`click`, mockEvent));
  expect(handleMovieClick.mock.calls.length).toBe(movies.length);
});
