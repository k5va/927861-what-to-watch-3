import ReactDOM from "react-dom";
import {App} from "@components";
import {movies, promoMovie} from "./mocks";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "@store";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovie={promoMovie}
        movies={movies}
      />
    </Provider>,
    document.querySelector(`#root`)
);
