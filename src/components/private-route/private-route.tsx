import * as React from "react";
import {Route, Redirect, RouteComponentProps} from "react-router-dom";
import {AppRoute} from "@routes";

interface Props {
  render: (props: RouteComponentProps) => React.ReactNode;
  path: string;
  exact: boolean;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
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
