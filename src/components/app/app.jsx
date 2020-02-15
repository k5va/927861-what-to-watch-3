import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main, MovieDetails} from "../../components";

const App = ({promoMovie, movies}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            promoMovie={promoMovie}
            movies={movies}
            onMovieTitleClick={() => {}}
          />
        </Route>
        <Route exact path="/dev-movie-details">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
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
