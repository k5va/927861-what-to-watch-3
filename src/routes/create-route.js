import AppRoute from "./app-route";

const createRoute = (route, param) => {
  switch (route) {
    case AppRoute.FILM:
    case AppRoute.PLAYER:
    case AppRoute.ADD_REVIEW:
      return route.replace(`:id`, param);
    default:
      return route;
  }
};

export default createRoute;
