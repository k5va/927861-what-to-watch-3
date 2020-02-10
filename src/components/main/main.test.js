import renderer from "react-test-renderer";
import Main from "./main";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};
const movieTitleClickHandler = () => {};

it(`Main should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <Main promoMovie={promoMovie} movies={movies} movieTitleClickHandler={movieTitleClickHandler} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
