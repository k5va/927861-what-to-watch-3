import {VideoPlayerFull} from "@components";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "@store";

const store = createStore(reducer);

it(`VideoPlayerFull should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Provider store={store}>
          <VideoPlayerFull isPlaying={true} />
        </Provider>,
        {
          createNodeMock: () => ({play: () => {}}) // mocking video ref
        }
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
