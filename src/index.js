import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PROMO_NAME: `The Grand Budapest Hotel`,
  PROMO_GENRE: `Drama`,
  PROMO_DATE: 2014
};

ReactDOM.render(
    <App
      promoName={Settings.PROMO_NAME}
      promoGenre={Settings.PROMO_GENRE}
      promoDate={Settings.PROMO_DATE}
    />,
    document.querySelector(`#root`)
);
