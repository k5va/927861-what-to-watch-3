import {reducer, ActionCreator} from "@store";
import {Genre} from "@consts";

const movies = [
  {
    id: `1`,
    title: `Die hard`,
    genre: `Drama`,
    year: 2019,
    duration: 123,
    cover: `cover`,
    poster: `poster`,
    src: `src`,
    description: `decription`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: {
      score: 8.9,
      count: 240
    },
    comments: []
  },
  {
    id: `2`,
    title: `Die hard`,
    genre: `Comedy`,
    year: 2019,
    duration: 123,
    cover: `cover`,
    poster: `poster`,
    src: `src`,
    description: `decription`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: {
      score: 8.9,
      count: 240
    },
    comments: []
  },
  {
    id: `3`,
    title: `Die hard`,
    genre: `Action`,
    year: 2019,
    duration: 123,
    cover: `cover`,
    poster: `poster`,
    src: `src`,
    description: `decription`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    rating: {
      score: 8.9,
      count: 240
    },
    comments: []
  }
];

it(`Reducer should change genre`, () => {
  const initialState = {
    selectedGenre: Genre.ALL,
    movies,
    selectedMovie: null,
    history: []
  };
  const targetState = {
    selectedGenre: `Comedy`,
    movies,
    selectedMovie: null,
    history: [ActionCreator.changeGenre(`Comedy`)]
  };

  expect(reducer(initialState, ActionCreator.changeGenre(`Comedy`)))
    .toEqual(targetState);
});

it(`Reducer should select movie`, () => {
  const initialState = {
    selectedGenre: Genre.ALL,
    movies,
    selectedMovie: null,
    history: []
  };
  const targetState = {
    selectedGenre: Genre.ALL,
    movies,
    selectedMovie: movies[0],
    history: [ActionCreator.selectMovie(movies[0])]
  };

  expect(reducer(initialState, ActionCreator.selectMovie(movies[0])))
    .toEqual(targetState);
});
