import {history, createRoute, AppRoute} from "@routes";

const handleMovieCardClick = (id) => history.push(createRoute(AppRoute.FILM, id));

export default handleMovieCardClick;
