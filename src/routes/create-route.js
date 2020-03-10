import AppRoute from "./app-route";

const createRoute = (route, param) => {
  switch (route) {
    case AppRoute.FILM:
    case AppRoute.PLAYER:
      return route.replace(`:id`, param);
    default:
      return route;
  }
};

export default createRoute;
