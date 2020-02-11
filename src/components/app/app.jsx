import Main from "../main/main";

const App = ({promoMovie, movies, movieTitleClickHandler}) => {
  return (
    <Main
      promoMovie={promoMovie}
      movies={movies}
      movieTitleClickHandler={movieTitleClickHandler}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieTitleClickHandler: PropTypes.func.isRequired
};


export default App;
