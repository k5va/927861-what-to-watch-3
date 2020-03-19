import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import ShowMore from "./show-more";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should show more be clicked`, () => {
  const handleClick = jest.fn();
  const component = mount(
      <ShowMore isVisible={true} onClick={handleClick} />
  );

  const showMoreButton = component.find(`.catalog__button`);
  showMoreButton.simulate(`click`, mockEvent);
  expect(handleClick.mock.calls.length).toBe(1);
});
