import * as React from "react";
import * as renderer from "react-test-renderer";
import ShowMore from "./show-more";

const handleClick = () => { };

it(`ShowMore should render correctly`, () => {
  const wrapper = renderer
    .create(
        <ShowMore isVisible={true} onClick={handleClick} />
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
