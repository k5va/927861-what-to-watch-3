import * as React from "react";
import * as renderer from "react-test-renderer";
import {SignIn} from "@components";
import {Router} from "react-router-dom";
import {history} from "@routes";

it(`SignIn should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Router history={history}>
          <SignIn onSubmit={() => {}} />
        </Router>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
