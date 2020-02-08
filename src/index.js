import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies, promoMovie} from "./mocks";

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
