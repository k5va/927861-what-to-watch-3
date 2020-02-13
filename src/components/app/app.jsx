import Main from "../main/main";

const App = ({promoMovie, movies, onMovieTitleClick}) => {
  return (
    <Main
      promoMovie={promoMovie}
      movies={movies}
      onMovieTitleClick={onMovieTitleClick}
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
  onMovieTitleClick: PropTypes.func.isRequired
};


export default App;
