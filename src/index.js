import ReactDOM from "react-dom";
import App from "./components/app/app";
import {movies, promoMovie} from "./mocks";

const handleMovieTitleClick = () => {};

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      movies={movies}
      onMovieTitleClick={handleMovieTitleClick}
    />,
    document.querySelector(`#root`)
);
