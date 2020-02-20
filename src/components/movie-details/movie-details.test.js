import {MovieDetails} from "@components";
import {generateId} from "@utils";

const movie = {
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

it(`MovieDetails should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <MovieDetails movie={movie} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});