import React from "react";
import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({promoName, promoGenre, promoDate}) => {
  return (
    <Main promoName={promoName} promoGenre={promoGenre} promoDate={promoDate} />
  );
};

export default App;
