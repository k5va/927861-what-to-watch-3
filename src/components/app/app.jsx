import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({promoName, promoGenre, promoDate, movies}) => {
  return (
    <Main
      promoName={promoName}
      promoGenre={promoGenre}
      promoDate={promoDate}
      movies={movies}
    />
  );
};

App.propTypes = {
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoDate: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default App;
