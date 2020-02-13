import ReactDOM from "react-dom";
import {App} from "./components";
import {movies, promoMovie} from "./mocks";

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
