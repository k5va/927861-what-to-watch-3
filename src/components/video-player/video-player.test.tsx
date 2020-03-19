import * as React from "react";
import * as renderer from "react-test-renderer";
import {VideoPlayer} from "@components";

const VIDEO_SRC = `video`;
const MOVIE_COVER = `cover`;

it(`VideoPlayer should render correctly`, () => {
  const wrapper = renderer
    .create(
        <VideoPlayer src={VIDEO_SRC} poster={MOVIE_COVER} isPlaying={true} />,
        {
          createNodeMock: () => ({play: jest.fn}) // mocking video ref
        }
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
