import axios from "axios";

const BASE_URL = `https://htmlacademy-react-3.appspot.com/wtw`;
const DEFAULT_TIMEOUT = 5000;

const Error = {
  UNAUTHORIZED: 401
};

export default class Api {

  constructor(onUnauthorized) {
    this._api = this._createAPI(onUnauthorized);
  }

  loadMovies() {
    return this._api.get(`/films`)
      .then((response) => response.data);
  }

  loadPromoMovie() {
    return this._api.get(`/films/promo`)
      .then((response) => response.data);
  }

  loadComments(movieId) {
    return this._api.get(`/comments/${movieId}`)
      .then((response) => response.data);
  }

  _createAPI(onUnauthorized) {
    const api = axios.create({
      baseURL: BASE_URL,
      timeout: DEFAULT_TIMEOUT,
      withCredentials: true,
    });

    const onSuccess = (response) => response;

    const onFail = (err) => {
      const {response} = err;

      if (response.status === Error.UNAUTHORIZED) {
        onUnauthorized();
      }

      throw err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
  }
}
