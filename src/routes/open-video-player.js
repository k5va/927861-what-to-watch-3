import history from "./history";
import AppRoute from "./app-route";
import createRoute from "./create-route";

const openVideoPlayer = (movieId) => history.push(createRoute(AppRoute.PLAYER, movieId));

export default openVideoPlayer;
