import reducer from "./user";
import ActionCreator from "./actions/action-creator";
import {AuthorizationStatus} from "@consts";
import {User} from "@models";

it(`Reducer should change authorizationStatus`, () => {
  const initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null
  };
  const targetState = {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: null
  };

  expect(reducer(initialState, ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH)))
    .toEqual(targetState);
});

it(`Reducer should set user data`, () => {
  const user = new User({'id': 1, 'email': `test@test.ru`, 'name': `name`, 'avatar_url': `URL`});
  const initialState = {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: null
  };
  const targetState = {
    authorizationStatus: AuthorizationStatus.AUTH,
    user
  };

  expect(reducer(initialState, ActionCreator.setUser(user)))
    .toEqual(targetState);
});
