import GenresList from "./genres-list";

const genres = [`Action`, `Comedy`, `Drama`, `Thriller`];

const selectedGenre = `Drama`;

const onGenreSelect = () => { };

it(`GenresList should render correctly`, () => {
  const wrapper = renderer
    .create(
        <GenresList genres={genres} selectedGenre={selectedGenre} onGenreSelect={onGenreSelect} />,
        {
          createNodeMock: () => ({})
        }
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
