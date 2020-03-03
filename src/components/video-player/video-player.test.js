import {VideoPlayer} from "@components";

const VIDEO_SRC = `video`;
const MOVIE_COVER = `cover`;

it(`VideoPlayer should render correctly`, () => {
  const wrapper = renderer
    .create(
        <VideoPlayer src={VIDEO_SRC} poster={MOVIE_COVER} isPlaying={true} />,
        {
          createNodeMock: () => ({play: () => {}}) // mocking video ref
        }
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
