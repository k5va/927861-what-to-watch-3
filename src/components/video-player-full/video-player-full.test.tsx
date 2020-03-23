import * as renderer from "react-test-renderer";
import {VideoPlayerFull} from "@components";

const movie = {
  id: `1`,
  title: `Die hard`,
  genre: `Drama`,
  year: 2019,
  duration: 123,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by
      concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
      Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
      the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
      mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in
      her murder.`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  rating: {
    score: 8.9,
    count: 240
  }
};

it(`VideoPlayerFull should render correctly`, () => {
  const wrapper = renderer
    .create(
        <VideoPlayerFull
          title={movie.title} duration={movie.duration} src={movie.src} poster={movie.poster}
          onExit={jest.fn}
        />,
        {
          createNodeMock: () => ({play: jest.fn}) // mocking video ref
        }
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
