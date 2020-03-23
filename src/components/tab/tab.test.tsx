import * as renderer from "react-test-renderer";
import Tab from "./tab";

it(`Tab should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Tab name="Hello">
          <h1>Hello world!</h1>
        </Tab>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
