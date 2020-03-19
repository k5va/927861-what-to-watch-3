import * as React from "react";
import * as renderer from "react-test-renderer";
import MyListButton from "./my-list-button";

it(`MyListButton should render correctly`, () => {
  const wrapper = renderer
    .create(
        <MyListButton movieId={`1`} isFavoriteMovie={true} isAuthenticated={true} onClick={() => {}} />
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
