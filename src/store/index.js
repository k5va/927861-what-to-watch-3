export {default as reducer} from "./reducer/reducer";
export {default as ActionCreator} from "./reducer/actions-creator";
export {default as getAppState} from "./reducer/app/selectors/get-app-state";
export {default as getSelectedGenre} from "./reducer/app/selectors/get-selected-genre";
export {default as getShownMoviesNumber} from "./reducer/app/selectors/get-shown-movies-number";
export {default as getMovies} from "./reducer/data/selectors/get-movies";
export {default as getMoviesByGenre} from "./reducer/data/selectors/get-movies-by-genre";
export {default as getPromoMovie} from "./reducer/data/selectors/get-promo-movie";
export {default as getSimilarMovies} from "./reducer/data/selectors/get-similar-movies";
export {default as getUniqueGenres} from "./reducer/data/selectors/get-unique-genres";
export {default as getMovie} from "./reducer/data/selectors/get-movie";
export {default as loadMovies} from "./reducer/data/operations/load-movies";
export {default as NameSpace} from "./reducer/name-space";
export {default as checkAuthStatus} from "./reducer/user/operations/check-auth-status";
export {default as login} from "./reducer/user/operations/login";
export {default as getUser} from "./reducer/user/selectors/get-user";
export {default as getAuthorizationStatus} from "./reducer/user/selectors/get-authorization-status";
export {default as handleError} from "./reducer/app/operations/handle-error";


