import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies, promoMovie} from "./mocks";

ReactDOM.render(
    <App
      promoName={promoMovie.name}
      promoGenre={promoMovie.genre}
      promoDate={promoMovie.date}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
