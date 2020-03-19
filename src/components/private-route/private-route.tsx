import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "@routes";

interface Props {
  render: (props: any) => React.ReactNode,
  path: string,
  exact: boolean,
  isAuthenticated: boolean
};

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {render, path, exact, isAuthenticated} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuthenticated
            ? render(routeProps)
            : <Redirect to={AppRoute.SIGN_IN} />
        );
      }}
    />
  );
};

export default PrivateRoute;
