import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies, promoMovie} from "./mocks";

const movieTitleClickHandler = () => {};

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      movies={movies}
      movieTitleClickHandler={movieTitleClickHandler}
    />,
    document.querySelector(`#root`)
);
