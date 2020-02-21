import {Tabs, Tab} from "@components";

const TAB_NAMES = [`Tab1`, `Tab2`, `Tab3`];

it(`Tabs should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Tabs tabs={TAB_NAMES}>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
        </Tabs>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
