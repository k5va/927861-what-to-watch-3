import * as renderer from "react-test-renderer";
import {Tabs, Tab} from "@components";

const TAB_NAMES = [`Tab1`, `Tab2`, `Tab3`];

it(`Tabs should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Tabs>
          <Tab name={TAB_NAMES[0]}>Tab1</Tab>
          <Tab name={TAB_NAMES[1]}>Tab2</Tab>
          <Tab name={TAB_NAMES[2]}>Tab3</Tab>
        </Tabs>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
