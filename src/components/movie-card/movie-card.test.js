import {MovieCard} from "@components";
import {generateId} from "@utils";

const movie = {
  id: generateId(),
  title: `Die hard`,
  genre: `Drama`,
  year: 2019,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `Bla Bla Bla`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  rating: {
    score: 8.9,
    count: 240
  }
};

const handleMovieClick = () => {};
const handleHover = () => {};

it(`MovieCard should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <MovieCard movie={movie} onHover={handleHover} onClick={handleMovieClick} />,
        {
          createNodeMock: () => ({})
        }
    )
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
