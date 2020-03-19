import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import MyListButton from "./my-list-button";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should my list button be clicked`, () => {
  const handleButtonClick = jest.fn();
  const component = mount(
      <MyListButton movieId={`1`} isFavoriteMovie={true} isAuthenticated={true} onClick={handleButtonClick} />
  );

  const myListButton = component.find(`.movie-card__button`);
  myListButton.simulate(`click`, mockEvent);
  expect(handleButtonClick.mock.calls.length).toBe(1);
});
