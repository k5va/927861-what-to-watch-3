
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "@routes";

const PrivateRoute = (props) => {
  const {render, path, exact, isAuthenticated} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          isAuthenticated
            ? render()
            : <Redirect to={AppRoute.SIGN_IN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
