import AppLogo from "./app-logo";
import {Router} from "react-router-dom";
import {history} from "@routes";

it(`AppLogo should render correctly`, () => {
  const wrapper = renderer
    .create(
        <Router history={history}>
          <AppLogo />
        </Router>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
