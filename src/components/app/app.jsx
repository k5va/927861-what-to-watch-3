import {Main} from "../../components";

const App = ({promoMovie, movies}) => {
  return (
    <Main
      promoMovie={promoMovie}
      movies={movies}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })).isRequired
};


export default App;
