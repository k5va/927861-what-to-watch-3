import * as React from "react";
import * as renderer from "react-test-renderer";
import {UserBlock} from "@components";
import {Provider} from "react-redux";
import {NameSpace} from "@store";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "@consts";

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null
  }
});

it(`UserBlock should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Provider store={store}>
          <UserBlock />
        </Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
